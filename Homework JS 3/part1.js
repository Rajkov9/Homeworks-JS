function enterPar(parameter){
    return typeof(parameter);
}

console.log("You've entered " + enterPar({name: "Ivan", lastname: "Rajkov", age: "27"}));
console.log("You've entered " + enterPar(true));
console.log("You've entered " + enterPar(42));
console.log("You've entered " + enterPar("This is a string"));
console.log("You've entered " + enterPar());