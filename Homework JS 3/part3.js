let atmBalance = 500;
function cashWithdrawal(money){
    if((atmBalance - money) >= 0){ 
        atmBalance -= money;
        console.log("You've made a successful cash withdrawal")
        return atmBalance;
    }
    else { 
        console.log("Insufficient funds");
        return atmBalance;
    }
}

while(atmBalance > 0){
    let money = parseFloat(prompt("Please enter the desired amount: "));
    if(!isNaN(money) && money > 0)
        console.log (cashWithdrawal(money));
    else{
        console.log("Yo've entered an invalid number");
        continue;
    }
}