// function greet(name) { // parameter
//     console.log(name);
// }

// greet("Hardik"); // argument



/// ===============================




// FUNCTION EXPRESSION

// const greet = function(){
//     console.log("Hello");
// };

// greet();



/// =====================================


//Anonymous function



// function() {
//     console.log("I have no name!");
// }
 // (Note: Running the above code alone will throw a syntax error because the browser expects a name for a standalone function declaration. It must be part of an expression.)


// () => {
//     console.log("I'm anonymous and sleek!");
// }


//============================================


// Arrow functions

// const add=(a,b)=>{
//     return a+b;
// }

// let sum=add(5,4);
// console.log(sum);



// Short arrow function - automatic return 

// const add=(a,b)=>a+b;


// ====================================


// Function Hoisting

// Function declarations are hoisted.
// You can call them before declaration.

// greet();

// function greet() {
//     console.log("Hello");
// }



// Function expressions and Arrow funct are not hoisted

//=====================================


// Default parameters

// function greet(name = "Guest") {
//     console.log(name);
// }

// greet();


// ======================================



// spread operator.

// const nums = [1, 2, 3];

// console.log(...nums);


//=========================================



// Callback funct

// function greet(name) {
//     console.log("Hello " + name);
// }

// function processUser(callback) {
//     callback("Hardik");
// }

// processUser(greet);



//==========================










 // TDZ,Closure,this keyword in functions , execution stack , call stack  - TO BE DONE LATER
