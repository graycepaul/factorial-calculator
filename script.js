// Factorial Calculator:Write a function that calculates the factorial of a given number.
// DO NOT USE PROMPT, I WANT ONLY 1 CONSOLE.LOG, YOUR FUNCTION MUST BE REUSEABLE, AND MUST RETURN A VALUE

function factorial(f) {
  let product = 1;
  if (f == 0 || f == 1) {
    return 1;
  } else if (f > 1) {
    for (let i = 1; i <= f; i++) {
      product *= i;
    }
    return product;
  }
}
console.log(factorial(6));
