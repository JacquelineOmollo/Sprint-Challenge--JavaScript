// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback
 * In the body of the function return the callback with the two parameters that you created
 */
function consume(food, drinks, cb) {
  return `I like to eat ${food} and drink ${drinks} for lunch.`;
}
let lunch = consume("pizza", "soda");
console.log(lunch);

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */
function add(num1, num2) {
  return num1 + num2;
}
let sum = add(3, 8);
console.log(sum);

function multiply(num3, num4) {
  return num3 * num4;
}
let product = multiply(20, 40);
console.log(product);

function greeting(first_name, last_name) {
  return `Hello ${first_name} ${last_name}, nice to meet you!`;
}
let greet = greeting("Phil", "Hart");
console.log(greet);
/* Step 3: Check your work by un-commenting the following calls to consume(): */
//consume(2,2,add); // 4
//consume(10,16,multiply); // 160
//consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: The nestedfunction() is nested in a closer that can inherit the arguments and variables scope of the internal and the outer function.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();
