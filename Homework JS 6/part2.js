let n = prompt("How many numbers do you want!")

function enterTheNumbers() {
    let result = [];
    for (let i = 0; i < n; i++) {
        let enterNumbers = parseInt(prompt("Please enter the numbers:"))
        if (!isNaN(enterNumbers) && enterNumbers > 0) {
            result.push(enterNumbers);
        }
        else {
            console.log("Please try again because you've entered an invalid number");
            i--;
        }
    }
    return result;
}

function sumOfNumbers(result) {
    let sum = 0;
    for (i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}

console.log("Enter the numbers");
let values = enterTheNumbers(n);
let sum = sumOfNumbers(values)

let list = document.getElementById('list');

for (let i = 0; i < values.length; i++) {
    let li = document.createElement('li');
    li.innerText = values[i];
    list.appendChild(li);
}

let equation = '';
for (let i = 0; i < values.length; i++) {
    if (i === values.length - 1) {
        equation += `${values[i]}`;
    }
    else {
        equation += `${values[i]} + `;
    }
} 

let equationElement = document.getElementById('puzzle')
equationElement.innerText = `Equation: ${equation} = ${sum}`;