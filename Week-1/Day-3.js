// curry function -> Currying (Curry Function) JavaScript mein ek technique hai jisme hum ek function ke multiple arguments ko ek-ek karke pass karte hain.
// function add ( a, b, c){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// console.log(add(2)(3)(5));



// Example
// function sendAutoEmail(to){
//     return function (subject){
//         return function (body){
//             console.log(`Sending email to ${to} with subject ${subject} and ${body} `)
//         }
//     }
// }
// let step1= sendAutoEmail(
//     "Bhawna10@gmail.com");
// let step2= step1("Regarding Confimation Mail of Signup")
// step2("This is proctored mail sent for only informational purpose")


// to store data of 100 students
// object
// const student={
//     name:"Ram",
//     age:23,
//     city:"Panipat"
// }
// console.log(student.name)
// console.log(student["age"])

// let key="name"
// console.log(student.key) not access output is undefined
// console.log(student["key"])


// const student={
//     name:"Ram",
//     age:23,
//     city:"Panipat",
//     skills:"Mern Stack",
//     // basically if any particular object is using any value of key in a method so at that time to access that we have to use this keyword.
//     // this -> student
//     sayYourSkills(){
//         console.log(this.skills);
//     }
//     // sayYourSkills:function(){
//     //     console.log("Hello my skills are mern stack");
//     // }
// }
// student.sayYourSkills();


// const dog1={
//     name:"Pilla",
//     bark(){
//         console.log("Helloooo , i am barking");
//     }
// }

// const dog2={
//     name:"Jack",
//     bark(){
//         console.log("Helloooo , i am barking");
//     }
// }

// const dog3={
//     name:"Meta",
//     bark(){
//         console.log("Helloooo , i am barking");
//     }
// }
//  memory wasting 
// method ko ek jgh rekhna hoga
// prototype chaining
// const animal={
//     bark(){
//         console.log("hello, I am barking .....");
//     }
// } 

// const dog=Object.create(animal);
// dog.name="Meta"
// dog.bark();

// constructor
// function Student(name,age){
//     this.name=name;
//     this.age=age;
// }
// const s1=new Student("ram",25);
// const s2=new Student("Sachin",30);
// console.log(s1)

// function Student(name,age){
//     this.name=name;
//     this.age=age;
// }
// Student.prototype.greet=function(){
//     console.log("Hello")
// }
// const s1=new Student("Ram",25);
// const s2=new Student("Sachin",26);
// const s3=new Student("Rohan",28);

// s1.greet();
// s2.greet();

// function Student(){
//     console.log(Student.prototype);
// }

// proto
// function student(){}
// const s1 = new student ();
// console.log(s1.__proto__ === student.prototype);


// ES6 class in javascript
// function Student(name,age){
//     this.name=name;
//     this.age=age;
// }

// Student.prototype.greet=function(){
//     console.log("Hello");
// }
// ES6 Style definition->

// Interview Question- kya class ke ander method object me copy hota h ??
// class Student{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greet(){
//         console.log("Hello")
//     }
// }

// Inheritance
// class Animal{
//     eat(){
//         console.log("Eating")
//     }
// }

// class Dog extends Animal{

// }

// const d= new Dog();
// d.eat();


// Super
// class Animal{
//     constructor(name){
//         this.name=name;
// }
// }
// class Dog extends Animal{
// constructor(name){
//     super(name);
//     this.name=name;
// }
// }

// const d= new Dog("Tom");

// Getter / Setter in Javascript
// normal form
// User.getName();
// // getter method
// class user{
//     get message(){
//         return "Hello";
//     }
// }

// const u = new User();

// console.log(u.message);

// Setter-> it is used to validate the data 
// class User{
//     get age(value){
//         if(value<0){
//             throw Error("invalid age")
//         }
//         this._age=value;
//     }
// }
// it will run automatically

// Static Methods in js
// to access normal in js

// user.greet();

// Static method 

// class MathHelper{
//     static add(a,b){
//         return a+b;
//     }
// }
// console.log(MathHelper.add(10,20));
//  there is no need to create objects in static class

