let animal = {
    name: "Steve",
    kind: "duck",
    speak: function (){
        return `${this.name} the ${this.kind} says: Nice to meet you!`
    }
}

console.log(animal.speak());