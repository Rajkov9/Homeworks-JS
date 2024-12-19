let firstName = ["Bob", "Jill"];
let lastName = ["Gregory", "Wurtz"];

function combineNames(firstName, lastName){
    let fullName = [];
    let string = " ";
    for(let i = 0; i<firstName.length; i++){
        string += `${parseInt(i+1)}. ${firstName[i]} ${lastName[i]}`;
        fullName.push(string);
        string = " ";
    }
    return fullName;
}

console.log(combineNames(firstName, lastName));

let fullName = combineNames(firstName, lastName)

for(let i=0; i<fullName.length; i++){
    console.log(fullName[i]);
}