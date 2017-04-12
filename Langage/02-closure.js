const logClosure = function (msg) {
  // portée de closure (portée sauvegardée)
  return function () {
    console.log(msg);
  };
};

const logHello = logClosure('Hello');
// ...
logHello();

var Person = function (firstName) {
  this.hello = function () {
    // firstName existe aussi grâce à la closure 
    return 'Hello my name is ' + firstName;
  };
};
var instructor = new Person('Romain');
console.log(instructor.hello()); // Hello my name is Romain 
var toto = new Person('Toto');
console.log(instructor.hello === toto.hello); // false

console.log(instructor.hasOwnProperty('hello')); // true
