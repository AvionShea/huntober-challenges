/*
October 3, 2024

 Challenge: 
 
 Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

 num --> 1 to input number --> div 3 fizz; div 5 buzz; div 15 fizz buzz
 always int; no floats
 print to console
*/

function fizzBuzz(num) {
  // loop 1 to input number - print to console
  for (let i = 1; i <= num; i++) {
    //conditional
    // i%15 === 0 -> fizzbuzz
    if (i % 15 === 0) {
      // i%3 === 0 -> fizz
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
      // i%5 === 0 -> buzz
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(5); //1, 2, fizz, 4, buzz
fizzBuzz(9); //1, 2, fizz, 4, buzz, fizz, 7, 8, fizz
fizzBuzz(15); //1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz
