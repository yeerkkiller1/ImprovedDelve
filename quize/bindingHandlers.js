function toggle(observ, values) {
  var index = values.indexOf(observ());
  index = (index + 1) % values.length;
  observ(values[index]);
}

//{observ: observ, values: []}
ko.bindingHandlers.clickToggle = {
  init: function(element, valueAccessor) {
    element.onclick = function() {
      var obj = valueAccessor();
      toggle(obj.observ, obj.values);
    }
  }
};
ko.bindingHandlers.hoverBind = {
  init: function(element, valueAccessor) {
    var observ = valueAccessor();
    element.onmouseover = function() {
      observ(true);
    }
    element.onmouseout = function() {
      observ(false);
    }
  }
};
ko.bindingHandlers.visibleWithClass = {
  init: function(element, valueAccessor) {
    ko.computed(function() {
      var visible = ko.utils.unwrapObservable(valueAccessor());
      if(visible) {
        element.style.display = "block";
        element.classList.add("visible");
      } else {
        element.style.display = "none";
        element.classList.remove("visible");
      }
    });
  }
};
//Takes {observ, key}.
//Persists the observ, and shares the backing storage with everything that has the same key,
//  so if an observable with the same key changes, our obserable also changes (and the persisted value changes).
ko.bindingHandlers.persistObserv = {
    init: function(_, valueAccessor) {
        var obj = valueAccessor();
        var observ = obj.observ;
        var key = obj.key;

        persistObserv(observ, key);
    }
}

function persistObserv(observ, key) {
    //TODO: Make sure we don't persist and observable multiple times, as that could
    //  cause massive performance issues.

    var globalObservs = window.globalObservs = window.globalObservs || {};
    
    //Sync with the globalObservs
    var globalObserv;
    if(globalObservs[key] === undefined) {
        globalObserv = globalObservs[key] = ko.observable(observ());
    } else {
        globalObserv = globalObservs[key];
        observ(globalObserv());
    }
    
    globalObserv.subscribe(observ);
    observ.subscribe(globalObserv);
    
    //And now sync with global storage
    
    if(localStorage[key] !== undefined && localStorage[key] !== "undefined") {
        try {
            globalObserv(JSON.parse(localStorage[key]));
        } catch(err) {
            console.error("Error when loading persist observ from key " + key + ":\n" + err);
        }
    }
    
    ko.computed(function(){
        var value = observ();
        localStorage.setItem(key, JSON.stringify(value));
    });
}

//Observable name becomes propName + "Observ",
//   get/setters are setup so using the old
//   values doesn't cause problems.
function forceObservable(holder, propName) {
    var observName = propName + "Observ";
    if(holder[observName]) return;

    var _privateValue = holder[propName];
    var observ = ko.observable(_privateValue);
    observ.subscribe(function(newValue){
       _privateValue = newValue; 
    });
    Object.defineProperty(holder, propName, {
        get: function(){
            return _privateValue;
        },
        set: function(val){
            observ(val);
        }
    });
    holder[observName] = observ;
}

//Similar to forceObservable, but if the property is already a proper
//  Uize property it already has an onChange handler, so we can just attach to that.
//Adds an observable (which is an observable but not exposed as a Uize property, just a raw javascript
//  property) called propName + "Observ".
//If filter is provided and returns true for a given value,
//  that value is NOT passed from the Uize object to the observable.
function addObservToUize(obj, propName, filter) {
    var observName = propName + "Observ";
    if(obj[observName]) return;

    var observ = ko.observable(obj.get(propName));
    obj.wire('Changed.' + propName, function(delta){
        var newValue = delta.newValue;
        if(filter && filter(newValue)) return;
        observ(newValue);
    });
    observ.subscribe(function(newValue){
        obj.set(propName, newValue);
    });
    obj[observName] = observ;
}