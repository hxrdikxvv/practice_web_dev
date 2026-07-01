//An object stores data in key-value pairs


// const user={
//     "name":"Hardik",
//     "age":19,
//     "isAdmin":true
// };

// console.log(user.name +" "+user.age +" "+user.isAdmin);


// console.log(user["name"]);







//  Nested Objects ⭐ VERY IMPORTANT

//Real-world objects are usually nested.

// const user = {
//   name: "Hardik",
//   address: {
//     city: "Moradabad",
//     state: "UP"
//   }
// };


// console.log(user.address.city);







// const user = {
//   name: "Hardik",
  
//   greet() {
//     console.log(this.name);
//   }
// };

// user.greet();


// Arrow func do not have their own this keyword.
// const user = {
//   name: "Hardik",
  
//   greet:()=> {
//     console.log(this.name);
//   }
// };

// user.greet();





// rename during Destructing.
// const { name: userName } = user;







// Object immutablity

// const user={
//     name:"Old"
// }
// const updated = {
//   ...user,
//   name: "New"
// };
// console.log(user.name);






//   Object.keys()

//  Returns keys.


// const user={
//     name:"Hardik",
//     age:19
// }

// console.log(Object.keys(user))



// Object.values()

// Returns values.



// console.log(Object.values(user))



console.log({}==={}) //false , obj compare references , not values.