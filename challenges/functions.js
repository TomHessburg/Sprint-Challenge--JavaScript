// ==== Callbacks ====  
console.log(" ");
console.log("====== begin function ====== ");
/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume (arg1, arg2, cb){
  return cb(arg1, arg2);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(num1,num2){
  return num1 + num2;
}

function multiply(num1,num2){
  return num1 * num2;
}

function greeting(fName,lName){
  return `Hello ${fName} ${lName}, nice to meet you!`
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!














// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.
        
// Explanation: 

    //because of closure!! well.. thats probably not the best explination. to explain in depth, we first need to understand that when a function finished running,
    //the variables within that function TECHNICALLY cease to exist. To further that, lets say instead of calling "nestedFunc", myFunction just returend the function "nested func"
    //that would mean that internal ceases to exist right? so we couldnt call our returned "nested func"?? WRONG! because nestedFunc has a closure on  the variable that 
    //it needs fro myFunction. in Holds it and can use it independently. I does this by being able to reach up its scope a level and snag what it needs from myFunction.


const external = "I'm outside the function";//everything has access to me because im a global variable

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";// this variable is created whenever we call myFunction. 

  function nestedFunction() {
    console.log(internal); //Because nestedFunc is using the internal variable from myFunction, it has the ability to reach up the scope and snage internal as it needs to.
  };                            //when a function finished running, it gets rid of the references for the variables that it created. this is why we need closure. to enclose the variables that a nested function needs from its parents.
  nestedFunction();
}
myFunction();









console.log("====== end function ====== ");