//Task 1: Create and Access Object Properties
// ans:

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022,
//   color: "Blue"
// };

// console.log(car.brand)
// console.log(car.model)
// console.log(car.year)
// console.log(car.color)

// 2.Task 2: Add, Update, and Delete Properties
// ans:

// let obj=new Object()
//     obj.name="gokulnath",
//     obj.age=21
// console.log("Step 1:",obj)
//     obj.country="india"
// console.log("Step 2:",obj)
//     obj.age=22
// console.log("Step 3:",obj)
//     delete obj.name
// console.log("Final answer:", obj)

// 3.Task 3: Object with Methods
// ans:
// let a=Number(prompt("Enter your value :"))
// let b=Number(prompt("Enter your value :"))
// let cal = {
//     add:function(a,b){
//         return a+b
//     },
//     sub:function(a,b){
//         return a-b
//     },
//     multy:function(a,b){
//         return a*b
//     }
// }
// console.log("addition:",cal.add(a,b))
// console.log("subtraction:", cal.sub(a,b))
// console.log("multiplication:", cal.multy(a,b))


// Task 4: Nested Object Access
// ans:

// const student = {
//   name: "Gokul",
//   grade: "A",
//   marks: {
//     math: 90,
//     english: 88,
//     science: 92
//   }
// };

// console.log("Student Name:",(student.name))
// console.log("Grade:",(student.grade))
// console.log("Maths Mark:",(student.marks.math))
// console.log("English Mark:",(student.marks.english))
// console.log("Science Mark:",(student.marks.science))

// Task 5: Loop Through Object and Count Properties
// ans:

// const laptop = {
//   brand: "HP",
//   processor: "i5",
//   ram: "16GB",
//   storage: "512GB SSD"
// };

// console.log("Properties Count:", Object.keys(laptop).length)

// Task 6: Shallow Copy vs Deep Copy
// ans:
// const student = {
//   name: "John",
//   marks: { math: 90, science: 85 }
// };
//  let Shallow=Object.assign({},student)
// Shallow.marks.math=100
// console.log("Original Students :",student)
// console.log("Copied Students :",Shallow)


// Task 7: Merge Multiple Objects
// ans:

// const obj1 = { id: 101, name: "Alice" };
// const obj2 = { age: 25 };
// const obj3 = { country: "India", department: "IT" };
// console.log(Object.assign({},obj1,obj2,obj3))

// <<<<<<<<<<<<<or>>>>>>>>>>>>>>>

// const obj1 = { id: 101, name: "Alice" };
// const obj2 = { age: 25 };
// const obj3 = { country: "India", department: "IT" };
// const obj4={...obj1,...obj2,...obj3}
// console.log(obj4)

// Task 8: Freeze and Modify
// ans:

// const settings = {
//   theme: "dark",
//   fontSize: 14
// };
// Object.freeze(settings);
// settings.theme = "light";
// settings.mode = "compact";
// delete settings.fontSize;
// console.log(settings);


// Task 9: Object Destructuring
// ans:

// const user = {
//   name: "Ravi",
//   age: 28,
//   address: {
//     city: "Chennai",
//     country: "India"
//   }
// };

// const {
//     name : userName,
//     age : userAge,
//     address : {city,country}
// }=user

// console.log("name:",userName)
// console.log("age:" ,userAge)
// console.log("city:" ,city)
// console.log("country:",country)

// Task 10: Count Nested Object Properties
// ans:

// const person = {
//   name: "Kumar",
//   details: {
//     age: 30,
//     contact: { phone: "12345", email: "test@mail.com" }
//   }
// };

// let count=0
// function fn(person){
//    let count=0;
   
//     for(let key in person){
//         count++;
//         if(typeof person[key]==="object"){
//         count+=fn(person[key])
//     }
//     }
//     return count
// }
// console.log(fn(person))