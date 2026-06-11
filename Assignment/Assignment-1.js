// 1. Create a variable using const and store your college name. Print it.
// const name="Geeta University";
// console.log(name);

// 2. Create a variable using let and update its value three times.
// let a = 9
// a = 6
// a = 4
// a = 2
// console.log(a);

// 3. Create a block using {} and show that a variable declared with let cannot be accessed
// outside it.

// {
//     let d = 6;
// }
// console.log(d);


// 4. Write a program to swap two numbers using array destructuring.
// let a = 5, b = 3;
// [a,b]=[b,a];
// console.log("a = ", a);
// console.log("b = ", b);

// 5. Create an arrow function that returns the cube of a number.
// const cube =  num => num*num*num;

// console.log(cube(6));


// 6. Create an arrow function to check whether a number is even or odd.
// const check = (num) => {
//     if(num%2==0){
//         return "even" ;
//     }
//     else{
//         return "odd";
//     }
// }
// console.log(check(7));

// 7. Create an arrow function that finds the maximum of three numbers.
// const maximum = (a,b,c)=>{
//     if(a>b && a>c ){
//         return 2;
//     }
//     else if(b>c && b>a){
//         return 3;
//     }
//     else{
//         return 5;
//     }
// }
// console.log(maximum(2,3,5));

// 8. Given an array:
// const nums = [10, 20, 30, 40, 50];
// Use destructuring to get first, second and remaining values.

// const arr=[10,20,30,40,50];
// const [a,b,...rem]=arr;
// console.log(a);
// console.log(b);
// console.log(rem);

// 9. Create a function that receives a user's name and age and returns: "Hello Ram, you
// are 25 years old." using template literals.

// const greet=(name,age)=>{
//     console.log(`Hello ${name}, you are ${age} years old`);
// }
// greet("Ram",25)

// 10. Generate the following URL dynamically: "/api/users/101" using template literals.
// const url=(port)=>{
//      console.log(`/api/users/${port}`);
// }
// url(101)

// 11. Create an object and destructure all properties:
// const student = {
// name: "Ram",
// age: 25,
// course: "MERN"
// };
// const {name,age,course}=student;
// console.log(name,age,course);


// 12. Rename course to technology while destructuring.
// const {course : technology}=student; 

// 13. Create a function with a default parameter: 
// function createUser(name,role="Student"){
//     return (`hello ${name}`);
// }
// console.log(createUser("Bhawna"));

// 14. Create a calculator function where the operation defaults to "add".
// const cal=(n1,n2,op="add")=>{
//     if(op=="add"){
//         return n1+n2;
//     }
//     else if(op=="mul"){
//         return n1*n2;
//     }
//     else if(op=="sub"){
//         return n1-n2;
//     }
//     else {
//         return n1/n2;
//     }
// }
// console.log(cal(4,2));

// 15. Create a function that receives unlimited numbers and returns their sum using the Rest
// Operator.

// const fun = (...arr)=>{
//    return  arr.reduce((acc,el)=>{
//         return acc+el
//     },0)
// }
// console.log(fun(1,2,7,3,9))

// 16. Create a function that receives unlimited numbers and returns the largest number.
// const lar=(...arr)=>{
//     return Math.max(...arr);
// }
// console.log(lar(3,7,9,4,12));

// 17. Merge two arrays using the Spread Operator
// const frontend = ["HTML", "CSS"];
// const backend = ["Node", "Express"];
// const merge = [...frontend, ...backend];

// 18. Copy an array using the Spread Operator and add one extra value.
// const nums=[1,2,3,4,5];
// const res=[...nums];
// res.push(2);

// 19. Copy an object and update only the email property.
//  const student = { 
// name: "Ram", 
// age: 25, 
// course: "MERN" ,
// email:"Bhawna10@gmail.com"
// };
// const obj={
//     ...student,
//     email:"jindalbhawna10gmail.com"
// }

// 20. Create a product object and create a new object with an added discount field using
// the Spread Operator.
// const products={
//     name:"TV",
//     price:1200
// }
// const updated={
//     ...products
//     ,
//     discouted:100
// }
// console.log(updated)

// 21. Use map() and an arrow function to return only names from the given array:
// const users = [
// { name: "Ram", age: 25 },
// { name: "Mohan", age: 30 },
// { name: "Amit", age: 22 }
// ];
// const result=users.map((el)=>{
//     return el.name;

// })
// console.log(result);

// 22. Use filter() to get users whose age is greater than 24.
// const find = users.filter (
//         a=> a.age>24
//         );
//     console.log(find);
    
// 23. Use reduce() to calculate the total age of all users.
// const result= users.reduce((sum,age)=>sum+age.age,0);
//     console.log(result);

// 24. Create a function createInvoice(customerName, amount) and return a formatted string using template literals.
// function createInvoice(customerName, amount) {
//     return `Invoice ${customerName}: Total Amount = ${amount}`;
// }
// console.log(createInvoice("Rahul", 5000));

// 25. Mini Challenge
// Given the student object:
// const student = {
// name: "Ram",
// marks: [80, 90, 70, 85]
// };
// Using Destructuring, Arrow Functions, Rest/Spread, and Template Literals, calculate the
// total marks and average, then print:
// Student: Ram
// Total: 325

// const student = {
//     name: "Ram",
//     marks: [80, 90, 70, 85]
// };

// // Destructuring
// const { name, marks } = student;
// console.log(`Student: ${name}`);

// // Arrow Function
// const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
// console.log(`Total: ${totalMarks}`);

// // Average
// const average = totalMarks / marks.length;
// console.log(`Average: ${average}`);