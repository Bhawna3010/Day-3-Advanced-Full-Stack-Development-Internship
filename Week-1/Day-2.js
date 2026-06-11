// Global scope
// let name = "Sachin"
// function show(){
//     console.log(name);
// }
// show();

// function scope
// function show(){
//     let name = "Sachin"
// }
// console.log(name);
// show();

// block scope
// {
//     let city = "Delhi";
//     console.log(city);
// }

// Lexical scope
// Example
// let a=10;
// function outer(){
// let b=20;
// console.log(a);
// console.log(b);
// }
// outer();


//  function outer(){
//     let username = "Parveen";
//     function inner(){
//         console.log(username);
//     }
// inner();
// }
// outer();
    
// Example
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


// closure in Javascript
// function outer(){
//     let count=0;
//     function inner(){
//         count++;
//         console.log(count);
//         }
//         return inner;
// }
// const result=outer();
// result();
// result();
// result();


// let x=1;
// function A(){
//     let x=2;
//     function B(){
//         let x=3;
//         function C(){
//           let x=4;
//           function D(){
//             console.log(x);
//           }
//           D();
//         }
// C();
//     }
// B();
// }
// A();

// iife
// (function (name){
//     console.log(name);
// })("Ram");

// const result=(function(a,b){
//     return a+b;
// })(10,20);
// console.log(result);

// higher order function
// function calculate(a,b,operation){
//     return operation(a,b);
// }
// function add(x,y){
//     return x+y;
// }
// console.log(calculate(70,90,add));

// Map function
// const num=[1,2,3,4];
// const result=num.map(num=>num*2);
// console.log(result);

// const products=[
//     {id:1,name:"mobie",price:15000},
//      {id:2,name:"pen",price:150},
//       {id:3,name:"bottle",price:3400},
//        {id:4,name:"tv",price:250000},
//         {id:5,name:"laptop",price:75000},
//          {id:6,name:"book",price:400},
//           {id:7,name:"tablet",price:600},
//     ]
//     const result= products.map(product=>product.name);
//     console.log(result);

// filter function
// const results=[10,20,30,40,50]
// const result=results.filter(geeta=>geeta<=30)
// console.log(result);

// const products=[
//     {price:10000},
//     {price:300},
//     {price:700},
//     {price:200}
// ]
// const result=products.filter(products=>products.price<500)
// console.log(result);

// const names=["Ram","Amit","Sachin","Priyanshu","Ankush","Sahil","Gyan","Shiv"];
// const result=names.filter(name=>name.startsWith("S"));
// console.log(result);

// const names=["Ram","Amit","Sachin","Priyanshu","Ankush","Sahil","Gyan","Shiv"];
// const result=names.filter(name=>name[0]=="S");
// console.log(result);

// Reduce function
// const nums=[1,2,3,4];
// const sum=nums.reduce((acc,curr)=>acc+curr,0);
// console.log(sum);

// const prices=[100,200,300,400,500];
// const result=prices.reduce((acc,curr)=>acc*curr,1);
// console.log(result);

// const arr=[10,50,20,30,90,60];
// const result=arr.reduce((max,curr)=>curr>max?curr:max,arr[0]);
// console.log(result);

// const word=["Hello","How","are","you"];
// const result=word.reduce((acc,curr)=>acc+" "+curr);
// console.log(result);