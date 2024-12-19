function enterTheFive(){
    let result = [];
    for(let i = 0; i < 5; i++){
        let enterNumbers = parseInt(prompt("Please enter the numbers:"))
       if (!isNaN(enterNumbers)){
        result.push(enterNumbers);
       }
       else{
        console.log("Please try again because you've entered an invalid number");
        i--;
       }
    }
    return result;
}

function sumOfFive(result){
    let sum = 0;
    for(i = 0; i<result.length; i++){
        sum += result[i];
    }
    return sum;
}

console.log("Enter the numbers");
let values = enterTheFive();
console.log("The sum of all is: "+ sumOfFive(values));