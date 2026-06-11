// Q-1.
// Output : 20

// Q-2.
// Output : error

// Q-3
// function a(){
//     let x=1;
//     function b(){
//         let y=2;
//         function c(){
//             let z=3;
//             function d(){
//                 let w=4;
//                 console.log(x);
//                 console.log(y);
//                 console.log(z);
//                 console.log(w);
//             }
//         d();
//     }
//     c();
// }
// b();
// }
// a();

// Q-4
// function outer() {
//     let outer = " outer variable";                
//     function inner() {
//         console.log(outer); 
//     }
//     return inner; 
// }
// const inner = outer(); 
// inner(); 
 
// Q-5
// Output : Undefined 

// Q-6
// function x (){
//     let a=1;
//     function y(){
//         let b=2;
//         function z(){
//         console.log(a);
//     }   
//     z();            
// }
// y();
// }
// x();

// Q-7
// Output  : Mohan

// Q-8
// function a(){
//     let x="Sachin";
//     function b(){
//         let y="Sahil";
//         function c(){
//             let z="Ram";
//                 console.log(x);
//                 console.log(y);
//                 console.log(z);
            
//     }
//     c();
// }
// b();
// }
// a();

// Q-9
// function a(){
//     let x=10;
//     function b(){
//         let y=20;
//         function c(){
//             console.log(x);
//             console.log(y);
//         }
//         c();
//     }
//     b();
// }
// a();
// console.log(x);

// parent();

// Q-10
// function createCounter() {
//     let count = 0;      
//     function increment() {
//         count++;
//         console.log(count);
//     }
//     return increment;
// }       
// const counter = createCounter();
// counter(); 
// counter(); 
// counter();
    
// Q-11
// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return inner;
// }

// const result = outer();

// result();
// result();
// result();

// Q-12
// function outer() {
//     let count = 11;

//     function inner() {
//         count--;
//         console.log(count);
//     }

//     return inner;
// }

// const result = outer();

// result();
// result();
// result();

// Q-13
// function createBankAccount(initialBalance=0) {
//     let balance = initialBalance;       
//     return {
//         deposit(amount) {
//             balance += amount;
//             console.log(`Deposited: ${amount}. Current Balance: ${balance}`);   
//         },
//         withdraw(amount) {
//             if (amount > balance) {
//                 console.log("Insufficient funds");
//             } else {
//                 balance -= amount;
//                 console.log(`Withdrew: ${amount}. Current Balance: ${balance}`);
//             }
//         },
//         checkBalance() {
//             console.log(`Current Balance: ${balance}`);
//         }
//     };
// }
// const myAccount = createBankAccount(1000);
// myAccount.checkBalance();   
// myAccount.deposit(500);
// myAccount.withdraw(200);    
// myAccount.checkBalance();

// Q-14
// function createUser(username) {
//     return function () {
//         console.log("Username:", username);
//     };
// }

// const user = createUser("Bhawna");

// user();
// user();
// user();

// Q-15
// function loginTracker() {
//     let attempts = 0;

//     return function () {
//         attempts++;

//         if (attempts >= 3) {
//             console.log("Account Locked");
//         } else {
//             console.log("Login Failed");
//         }
//     };
// }

// const login = loginTracker();

// login();
// login();
// login();

// Q-16
// function createPassword() {
//     let password = "12345";

//     return {
//         getPassword() {
//             return password;
//         }
//     };
// }

// const user = createPassword();

// console.log(user.getPassword());

// Q-17
// function shoppingCart() {
//     let items = [];

//     return {
//         addItem(item) {
//             items.push(item);
//         },

//         removeItem(item) {
//             items = items.filter(i => i !== item);
//         },

//         showItems() {
//             console.log(items);
//         }
//     };
// }

// const cart = shoppingCart();

// cart.addItem("Laptop");
// cart.addItem("Mouse");
// cart.showItems();

// cart.removeItem("Mouse");
// cart.showItems();

// Q-18
// function votingMachine() {
//     let votedUsers = [];

//     return function (user) {
//         if (votedUsers.includes(user)) {
//             console.log(user + " already voted");
//         } else {
//             votedUsers.push(user);
//             console.log(user + " voted successfully");
//         }
//     };
// }

// const vote = votingMachine();

// vote("Ram");
// vote("Shyam");
// vote("Ram");

// Q-19
// function counter() {
//     let count = 0;

//     return function () {
//         count++;
//         console.log("Executed:", count, "times");
//     };
// }

// const run = counter();

// run();
// run();
// run();

// Q-20
// function expenseTracker() {
//     let total = 0;

//     return {
//         addExpense(amount) {
//             total += amount;
//         },

//         getTotal() {
//             console.log("Total Expense:", total);
//         }
//     };
// }

// const expense = expenseTracker();

// expense.addExpense(500);
// expense.addExpense(300);

// expense.getTotal();

// Q-21
// (function(){
//     console.log("Welcome to JavaScript");
// }   )();

// Q-22
// (function(length, width) {
//     const area = length * width;
//     console.log(`Area of rectangle: ${area}`);
// })(5, 10);

// Q-23
// (() => {
//     console.log("This is an arrow function IIFE!");
// })();       

// Q-24
// (function() {
//     let privateVar = "Private";
//     console.log(privateVar);
// })();

// Q-25
// (function() {
//     let count = 0;      
//     function increment() {
//         count++;
//         console.log(count);
//     }   
//     function decrement() {
//         count--;

//         console.log(count);         

//     }
//     function reset() {
//         count = 0;
//         console.log(count);
//     }
//     window.counterModule = {
//         increment,
//         decrement,
//         reset
//     };
// }
// )();

// Q-26
// function calculate(a,b,operation){
//     const operations={
//         add:(x,y)=>x+y,     
//         subtract:(x,y)=>x-y,
//         multiply:(x,y)=>x*y,
//         divide:(x,y)=>x/y
//     };                                  
//     return operations[operation](a,b);
// }       
// console.log(calculate(10,5,"add"));
// console.log(calculate(10,5,"subtract"));
// console.log(calculate(10,5,"multiply"));
// console.log(calculate(10,5,"divide"));

// Q-27
// function repeat(times, fn) {
//     for (let i = 0; i < times; i++) {
//         fn();
//     }
// }

// function sayHello() {
//     console.log("Hello!");
// }
// repeat(5, sayHello);

// Q-28
// function createLogger(level) {
//     return function(message) {
//         console.log(`[${level}] ${message}`);
//     };
// }
// const infoLogger = createLogger("INFO");
// const errorLogger = createLogger("ERROR");
// infoLogger("User Logged In");
// errorLogger("Invalid Password");
// infoLogger("User Logged Out");
                         
// Q-29
// function executionTimer(fn) {
//     return function(...args) {
//         const start = performance.now();    
//         const result = fn(...args);
//         const end = performance.now();
//         console.log(`Execution time: ${end - start} milliseconds`);
//         return result;
//     };  
// }    
// function exampleFunction() {
//     let sum = 0;        
//     for (let i = 0; i < 1e6; i++) {
//         sum += i;
//     }   
//     return sum; 
// }   
// const timedExampleFunction = executionTimer(exampleFunction);
// timedExampleFunction(); 

// Q-30
// function createCounter(fn) {
//     let count = 0;
//     return function(...args) {
//         count++;
//         console.log(`Function called ${count} times`);
//         return fn(...args);
//     };
// }

// Q-31
// const users = [
// {name:"Ram",age:25},
// {name:"Mohan",age:30},
// {name:"Amit",age:22}
// ];
// const result=users.map((el=>el.name));
// console.log(result);

// Q-32
// [1,2,3,4,5]
// into
// [1,4,9,16,25]

// const nums=[1,2,3,4,5];
// const result=nums.map(num=>num*num);
// console.log(result);

// Q-33
// const products=[
//     {name:"Laptop"},
//     {name:"Mouse"},                     
//     {name:"Keyboard"}
// ];
// const result=products.map(el=>el.name);
// console.log(result);
 
// Q-34
// const nums=[1,2,3,4,5,6];
// const result=nums.filter(num=>num%2==0);
// console.log(result);

// Q-35
// const users = [
// { name: "Ram", age: 25 },
// { name: "Mohan", age: 30 },          
// { name: "Amit", age: 22 }
// ];

// const result=users.filter(el=>el.age>25);
// console.log(result);

// Q-36
// const products=[
//     {name:"Laptop",price:1500},
//     {name:"Mouse",price:500},
//     {name:"Keyboard",price:1200}
// ];
// const result=products.filter(el=>el.price>1000);
// console.log(result);

// Q-37
// const nums=[10,20,30,40];
// const result=nums.reduce((acc,curr)=>acc+curr,0);
// console.log(result);

// Q-38
// const nums=[5,12,3,45,2];
// const result=nums.reduce((max,num)=>num>max?num:max,nums[0]);
// console.log(result); 

// Q-39
// const arr=["JavaScript","React","Node"];
// const result=arr.reduce((acc,curr)=>acc+curr.length,1);
// console.log(result);

// Q-40
// Given:
// const orders = [
// {
// id:1,
// amount:5000,
// status:"completed"
// },
// {
// id:2,
// amount:2000,
// status:"pending"
// },
// {
// id:3,
// amount:7000,
// status:"completed"
// },
// {
// id:4,
// amount:1000,
// status:"completed"
// }
// ];
// const completedOrders=orders.filter(order=>order.status=="completed");
// console.log(completedOrders);                                                                                                
// const totalRevenue=orders.reduce((acc,curr)=>curr.status=="completed"?acc+curr.amount:acc,0);
// console.log(totalRevenue);
// const averageRevenue=totalRevenue/completedOrders.length;
// console.log(averageRevenue);
// const highestOrderAmount=orders.reduce((max,order)=>order.amount>max?order.amount:max,orders[0].amount);
// console.log(highestOrderAmount);
// const orderIDs=orders.map(order=>order.id);  
// console.log(orderIDs);