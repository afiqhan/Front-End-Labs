// task 1 
// _____________
// 1
function square(number) {
  return number * number;
}
let theNumber = prompt('Enter a number to square it?');
let mySquare = square(theNumber);
console.log(mySquare); 
// Output: number * number
//-----------------
// 2 
function CubeOf2Number(num1, num2) {
  return Math.pow(num1,3) + Math.pow(num2,3);
}
let num1 = prompt('Enter the first number?');
let num2 = prompt('Enter the second number?');
console.log(CubeOf2Number(num1,num2));
//-----------------
// 3
function reverseNumber(number) {
  let reversed = 0;
  while (number !== 0) {
    let lastDigit = number % 10;
    reversed = (reversed * 10) + lastDigit;
    number = Math.floor(number / 10);
  }
  return reversed;
}
let myNumber = prompt("Enter a number to get the reverse?");
let myReversedNumber = reverseNumber(myNumber);
console.log(myReversedNumber);


function isDivisible(num){
  for(let i = 1; i <= 100; i++){
    if(i % num == 0) 
    console.log(i);
  }
}
let num3 = prompt('what number u want to test if divisible?');
isDivisible(num3);