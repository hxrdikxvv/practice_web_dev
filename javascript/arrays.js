// Destructuring Arrays

// const fruits=["Apple","Banana"];
// const [x,y]=fruits;
// console.log(x+" "+y);






//console.log(typeof(fruits)) // object



//Array constructor
// const arr=new Array(1,2,3); // rarely used.




// array length

// let arr=[1,2,3];
// console.log(arr.length);





// Arrays are Mutable

// Arrays can be changed after creation.

// const arr=[1,2,3];

// arr.push(5);
// console.log(arr);

// This works even with const , const prevents reassignment but not mutation.








// Array methods 


// 1. Push
// Add item at end.




// 2.pop

// Remove last item

// const cart=["soap","brush","oil"];

// cart.pop();
// console.log(cart);





// 3. shift

// removes first element , its slower than pop as indexes shift.

// const cart=["soap","brush","oil"];

// cart.shift();
// console.log(cart);






// 4.unshift
// Add item at beginning


// const cart=["soap","brush","oil"];

// cart.unshift("maggie");
// console.log(cart);





// 5. includes
// Checks existence

// const roles = ["admin", "user"];

// console.log(roles.includes("admin"));






// 6. indexOf

// finds position, returns index if found or -1 if not.

// const arr=[2,3,4,1,1];

// console.log(arr.indexOf(1))






// 7. map

// transforms array

// const nums=[1,2,3,4];

// const double=nums.map(num=>num*2);
// console.log(double)

// Returns a new Array!






// 8. filter

// filters item based on conditions


// const nums=[1,2,3,4,5]

// const even=nums.filter(num=>num%2===0);

// console.log(even);






// 9. find
// returns first matching item

// const users=[
//     {
//         "id":1,
//         "name":"hardik"
//     },
//     {
//         "id":2,
//         "name":"arjun"
//     },
//     {
//         "id":3,
//         "name":"abhay"
//     }
// ];
// const user = users.find(user => user.id === 3);

// console.log(user);






// 10. forEach

// const arr=[1,2,3];
// arr.forEach(e=>  console.log(e+2));







