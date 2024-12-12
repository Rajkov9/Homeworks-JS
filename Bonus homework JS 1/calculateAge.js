let birthYear = prompt("Please enter your year of birth");
const currentYear = new Date().getFullYear();
function ageCalculator(birthYear, currentYear) {
  return currentYear - birthYear;
}
console.log(ageCalculator(birthYear, currentYear));
