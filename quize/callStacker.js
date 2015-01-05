function getCallstack() {
    var stack;
    try{throw new Error()}catch(err){stack = err.stack;}
    return stack.split("\n").slice(1).map(function(str){
        return str.substr(str.indexOf("at") + 3);
    });
}

function UID() {
    return ("uid" + Math.random()).replace(".", "");
}

//Returns {html: divTag, script}
function makeCallstackUI(event, callstack) {
    var uid = UID();
    var div = document.createElement("div");
    div.id = uid;
    div.setAttribute("data-bind", "template: {name: 'stackTrace', data: $data}");
    div.style["white-space"] = "normal";
    return {
        html: div,
        script: 
                     "var callstack = " + JSON.stringify(callstack).replace(/'/g, "\\'") + ";"
            +'\n'+   "var event = '" + event.replace(/'/g, "\\'") + "';"
            +'\n'+   "var uid = '" + uid + "';"
            +'\n'+   "function stackValues(event, fncs) {"
            +'\n'+   "    var obj = {"
            +'\n'+   "        event: event,"
            +'\n'+   "        stack: fncs,"
            +'\n'+   "        hover: ko.observable(false),"
            +'\n'+   "        pinned: ko.observable(false),"
            +'\n'+   "        showHidden: ko.observable(false)"
            +'\n'+   "    };"
            +'\n'+   "    "
            +'\n'+   "    obj.active = ko.computed(function(){ return obj.hover() || obj.pinned() });"
            +'\n'+   "    return obj;"
            +'\n'+   "}"
            +'\n'+   ""
            +'\n'+   "function fncValue(text) {"
            +'\n'+   "    return {"
            +'\n'+   "        text: text,"
            +'\n'+   "        rating: ko.observable(0) //-1 is bad, +1 is good (is a string so checked works properly, not really continous anyway though)"
            +'\n'+   "    };"
            +'\n'+   "}"
            +'\n'+   "var stack = stackValues(event, callstack.map(fncValue));"
            +'\n'+   "var elem = document.getElementById(uid);"
            +'\n'+   "ko.applyBindings(stack, elem);"
    };
}