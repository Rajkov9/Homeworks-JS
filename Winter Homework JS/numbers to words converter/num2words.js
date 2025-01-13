function convertNumbersToWords (number){
    const ones =['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const teens =['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const thousands = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion'];

    if(number === 0) return "zero";
    if(number < 0) return "minus " + convertNumbersToWords(Math.abs(number));

    let words = "";
    for(let i = 0; i < thousands.length; i++){
        const x = number % 1000;
        if (x !== 0){
            if(i === 0){
                words = convertNumbersToWordsInHundreds(x) + " " + thousands [i] + " " + words;
            } else {
                words = convertNumbersToWordsInHundreds(x) + " " + thousands [i] + " " + words;
            }
        }
        number = Math.floor(number/1000);
    }
    return words.trim();
}

function convertNumbersToWordsInHundreds(number){
    const ones =['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const teens =['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let words = "";
    if(number % 100 < 10 || number % 100 >= 20){
        words = ones[number % 10];
        number = Math.floor(number / 10);
        words = tens[number % 10] + " " + words;
        number = Math.floor(number / 10);
    }else{
        words = teens[number % 10];
        number = Math.floor(number / 100);
    }

    if(number === 0){
        return words;
    }
    return ones[number] + " hundred and " + words;
}

const numberInput = document.querySelector(".numberInput");
const numberToWord = document.querySelector(".numberToWord");
numberInput.addEventListener("keyup", ()=>{
    numberToWord.innerHTML = convertNumbersToWords(numberInput.value);
})