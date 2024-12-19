let book = {
    title: "The Robots of dawn",
    author: "Isaac Asimov",
    readingStatus: function(){
        if(true){
            return `Already read ${this.title} by ${this.author}.`
        }
        else{
        }
    }
}

console.log(book.readingStatus());