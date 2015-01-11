var constant = (function() {
  var constants = {},
  ownProp = Object.prototype.hasOwnProperty,
  allowed = {
    string: 1,
    number: 1,
    boolean: 1
  },
  prefix = (Math.random() + "_").slice(2);

  return {
    con: constants,
    set: function(name, value) {
      if (this.isDefined(name)) {
        return false;
      }
      if (!ownProp.call(allowed, typeof value)) {
        return false;
      }
      constants[prefix + name] = value;
      return true;
    },

    isDefined: function(name) {
      return ownProp.call(constants, prefix + name);
    },

    get: function(name) {
      if (this.isDefined(name)) {
        return constants[prefix + name];
      }
      return null;
    }
  }
}());

constant.set('aaa', 123);

console.log(constant.con);

var str = "something";




console.log(str.toUpperCase().replace('S', 'FFFF'));



function inherit(child, parent) {
  child.prototype = Object.create(parent.prototype);
}


function extend(parent, child) {
  child = child || {};
  var str = "[object Array]";
  var toStr = Object.prototype.toString;

  for (var i in parent) {
    if ( parent.hasOwnProperty(i) ) {
      if ( typeof parent[i] === "object") {
        child[i] = toStr.call(parent[i]) === str ? [] : {} 
        extend(parent[i], child[i]);
      } else {
        child[i] = parent[i];
      }
    }
  }

  return child;
}


var par = {
  name: 'Adam',
  age: 22,
  getName: function() {
    console.log(this.name);
  },
  skills : {
    ruby: 5,
    html: 2,
    php: 100
  },
  counts: [1,2,3,4]

}


var ch = extend(par);

ch.skills.html = 5000;


var Person = function(name) {
  this.name = name;
  this.greet = function() {
    console.log('hello ' + this.name);
  }
};

Person.prototype.say = function() {
  console.log('I can tell my name');
}

var person = new Person('Jack');

var Developer = function() {
  // Person.apply(this, arguments);
};


Developer.prototype = new Person;

var dev = new Developer('Mike');

// Developer.prototype.say = function() {
//   console.log('Wow! i changed Person prototype!!!');
// };

console.log(dev.greet());
dev.say();
person.say();