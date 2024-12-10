let phones = 30;
let individualPrice = 119.95;
let taxRate = 0.05;

let taxPrice = individualPrice * taxRate;

let totalPrice = individualPrice + taxPrice;

let priceForAll = phones * totalPrice;

console.log("price for 30 phones");
console.log(priceForAll);