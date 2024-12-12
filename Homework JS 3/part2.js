function convertToYears(years, isHuman) {
    if(isHuman){
        return years * 7; // to dog years
    }else{
        return years / 7; // back to human years
    }
    
}

let years = parseInt(prompt("Please enter your age"));
let isHuman = parseInt(prompt("Are these human or dog years"))
console.log(convertToYears(years, isHuman));