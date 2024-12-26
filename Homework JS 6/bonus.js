function promptForNumber(message) {
    let num = parseInt(prompt(message));
    while (isNaN(num) || num <= 0) {
        num = parseInt(prompt("Please enter a valid number: "));
    }
    return num;
}

function promptForList(message, count) {
    let list = [];
    for (let i = 0; i < count; i++) {
        let item = prompt(message);
        while (item == null || item == "") {
            item = prompt("Invalid entry, please try again!");
        }
        list.push(item);
    }
    return list;
}

function updateList(elementId, items) {
    let listElement = document.getElementById(elementId);
    for (let i = 0; i < items.length; i++) {
        let li = document.createElement('li');
        li.innerText = items[i];
        listElement.appendChild(li);
    }
}

let recipeName = prompt("Enter the name of the recipe:");
document.getElementById('recipe').innerText = recipeName;

let numberOfIngredients = promptForNumber("How many ingredients are needed?");
let ingredients = promptForList("Enter the ingredient: ", numberOfIngredients);
updateList("ingredients", ingredients)