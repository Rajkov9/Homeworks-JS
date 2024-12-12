let year = parseInt(prompt("Please enter your birh year"));
let chineseZodiac = (year - 4)%12;

if(chineseZodiac == 0){
    console.log("You're a Rat");
}else if (chineseZodiac == 1){
    console.log("You're an Ox");
}else if (chineseZodiac == 2){
    console.log("You're a Tiger");
}else if (chineseZodiac == 3){
    console.log("You're a Rabbit");
}else if (chineseZodiac == 4){
    console.log("You're a Dragon");
}else if (chineseZodiac == 5){
    console.log("You're a Snake");
}else if (chineseZodiac == 6){
    console.log("You're a Horse");
}else if (chineseZodiac == 7){
    console.log("You're a Goat");
}else if (chineseZodiac == 8){
    console.log("You're a Monkey");
}else if (chineseZodiac == 9){
    console.log("You're a Rooster");
}else if (chineseZodiac == 10){
    console.log("You're a Dog");
}else if (chineseZodiac == 11){
    console.log("You're a Pig");
}else{
    console.log("You've entered an invalid number");
}