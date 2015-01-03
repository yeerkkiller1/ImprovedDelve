package main

import (
	"flag"
	"fmt"
	"log"
	"time"
	"net/http"
	"strconv"
	"io/ioutil"
	"bytes"
	"os"
)

type FileBuffer struct {
    Buffer bytes.Buffer
    Index  int64
}

func NewFileBuffer(buffer bytes.Buffer) FileBuffer {
    return FileBuffer{buffer, 0}
}

func (fbuffer FileBuffer) Bytes() []byte {
    return fbuffer.Buffer.Bytes()
}

func (fbuffer FileBuffer) Read(p []byte) (int, error) {
    n, err := bytes.NewBuffer(fbuffer.Buffer.Bytes()[fbuffer.Index:]).Read(p)

    if err == nil {
        if fbuffer.Index+int64(len(p)) < int64(fbuffer.Buffer.Len()) {
            fbuffer.Index += int64(len(p))
        } else {
            fbuffer.Index = int64(fbuffer.Buffer.Len())
        }
    }

    return n, err
}

func (fbuffer FileBuffer) Write(p []byte) (int, error) {
    n, err := fbuffer.Buffer.Write(p)

    if err == nil {
        fbuffer.Index = int64(fbuffer.Buffer.Len())
    }

    return n, err
}

func (fbuffer FileBuffer) Seek(offset int64, whence int) (int64, error) {
    return int64(fbuffer.Buffer.Len()), nil
}


func handler(w http.ResponseWriter, r *http.Request) {
	if _, err := os.Stat("." + r.URL.Path); err == nil && len(r.URL.Path) > 1 {
		log.Print("Man in the middled\t", "." + r.URL.Path)
		http.ServeFile(w, r, "." + r.URL.Path)
		return
	}

	log.Print("Downloading\t\t", r.URL.Path)
	resp, err := http.Get("http://www.uize.com" + r.URL.Path)

	if err != nil {
        fmt.Printf("%s", err)
		return
    }

    defer resp.Body.Close()
    contents, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        fmt.Printf("%s", err)
        return
    }

    log.Print("Serving\t\t", r.URL.Path)
    golangisdumb := NewFileBuffer(*bytes.NewBuffer(contents))
	http.ServeContent(w, r, r.URL.Path, time.Now(), golangisdumb)
}

func main() {
	portNumber := flag.Int("port", 80, "Sets the port the server listens on for both http requests and websocket connections.")

	flag.Parse()

	http.HandleFunc("/", handler)

	fmt.Println("Beginning HTTP listening on port", *portNumber)
	err := http.ListenAndServe(":"+strconv.Itoa(*portNumber), nil)
	if err != nil {
		log.Fatal("ListenAndServe:", err)
	}
}
