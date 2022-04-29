//1 Convert the following function into an arrow function named "arrowMyFunction".
const arrowMyFunction = (num1,num2) => {return num1 + num2}; 
//Testing
console.log(arrowMyFunction(1,2)); //3


//2 Convert the following function into a one-lined arrow function without a return statement 
//(the return is implicit) . Name the function arrowAdd100
const arrowAdd100 = money => money + 100;
//Testing
console.log(arrowAdd100(2)); //102


//3 Create an arrow function that takes TWO arguments, a string and a single letter.  The 
//function will count the number of times the specified letter occurs in the string. **Not case sensitive
const countLetters = (str, letter) => str.split(letter).length - 1;
//Testing
console.log(countLetters("hello","l")); //2
console.log(countLetters("my name is jose martinez", "m")); //3