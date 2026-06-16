// Q1. 
// function greetUser(name, callback) {
//     console.log("Hello " + name);
//     callback(name);
// }

// function welcome(name) {
//     console.log("Welcome " + name);
// }

// greetUser("Ram", welcome);

// Q2. 
// function calculate(a, b, callback) {
//     return callback(a, b);
// }

// function add(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }

// console.log(calculate(20, 10, add));
// console.log(calculate(20, 10, multiply));
// console.log(calculate(20, 10, divide));

// Q3. 
// function calculator(a, b, operation) {
//     return operation(a, b);
// }

// console.log(calculator(20, 10, (a, b) => a + b));
// console.log(calculator(20, 10, (a, b) => a - b));
// console.log(calculator(20, 10, (a, b) => a * b));

// Q4. 
// function processStudent(student, callback) {
//     callback(student);
// }

// const student = {
//     name: "Ram",
//     age: 20,
//     course: "BCA"
// };

// processStudent(student, function(data) {
//     console.log("Name:", data.name);
//     console.log("Age:", data.age);
//     console.log("Course:", data.course);
// });

// Q5. 
// function downloadFile(callback) {
//     console.log("Downloading file...");

//     setTimeout(() => {
//         console.log("File Downloaded");
//         callback();
//     }, 2000);
// }

// downloadFile(() => {
//     console.log("Opening File...");
// });

// Q6. 
// function registerUser(callback) {
//     console.log("Registering User...");

//     setTimeout(() => {
//         console.log("User Registered");
//         callback();
//     }, 1000);
// }

// function sendWelcomeEmail() {
//     console.log("Welcome Email Sent");
// }

// registerUser(sendWelcomeEmail);

// Q7. 
// function placeOrder(callback) {
//     console.log("Order Placed");

//     callback();
// }

// function generateInvoice() {
//     console.log("Invoice Generated");
// }

// placeOrder(generateInvoice);

// Q8. 
// function fetchUser(callback) {
//     setTimeout(() => {
//         const user = {
//             id: 1,
//             name: "Ram"
//         };

//         callback(user);
//     }, 3000);
// }

// fetchUser((user) => {
//     console.log(user);
// });

// Q9. 
// function verifyOTP(enteredOTP, callback) {
//     const correctOTP = "1234";

//     if (enteredOTP === correctOTP) {
//         callback(true);
//     } else {
//         callback(false);
//     }
// }

// verifyOTP("1234", function(result) {
//     if (result) {
//         console.log("OTP Verified");
//     } else {
//         console.log("Invalid OTP");
//     }
// });

// Q10. 
// function login(username, password, callback) {
//     const correctUser = "admin";
//     const correctPass = "12345";

//     if (username === correctUser && password === correctPass) {
//         callback(true);
//     } else {
//         callback(false);
//     }
// }

// login("admin", "12345", function(success) {
//     if (success) {
//         console.log("Login Successful");
//     } else {
//         console.log("Login Failed");
//     }
// });

// Q11.
// Output:
// A
// C
// B

// Q12. 
// Output:
// 2
// 1

// Q13. 
// Output:
// Start
// End
// Timeout

// Q14. 
// for(let i = 5; i >= 1; i--) {
//     setTimeout(() => {
//         console.log(i);
//     }, (6 - i) * 1000);
// }

// setTimeout(() => {
//     console.log("Boom");
// }, 6000);

// Q15.
// let timer = 10;

// function bombTimer() {
//     if(timer > 0) {
//         console.log(timer);
//         timer--;

//         setTimeout(bombTimer, 1000);
//     } else {
//         console.log(" BOOM!");
//     }
// }

// bombTimer();

// Q16.
// function greetUser(name) {
//     setTimeout(() => {
//         console.log(`Hello ${name}`);
//     }, 2000);
// }

// greetUser("Ram");

// Q17.
// function showNotification(message) {
//     setTimeout(() => {
//         console.log(" Notification:", message);
//     }, 3000);
// }

// showNotification("New Message Received");

// Q18.
// const button = document.getElementById("btn");

// setTimeout(() => {
//     button.disabled = true;
//     console.log("Button Disabled");
// }, 5000);
// HTML
// <button id="btn">Click Me</button>

// Q19.
// console.log("Redirecting in 3 seconds...");

// setTimeout(() => {
//     console.log("Redirected to Home Page");
// }, 3000);

// Q20. 
// function wait(seconds, callback) {
//     setTimeout(callback, seconds * 1000);
// }

// wait(3, () => {
//     console.log("Task Completed");
// });

// Q21.
// function login(callback) {
//     setTimeout(() => {
//         console.log("Login Successful");
//         callback();
//     }, 1000);
// }

// function getUser(callback) {
//     setTimeout(() => {
//         console.log("User Data Fetched");
//         callback();
//     }, 1000);
// }

// function getOrders(callback) {
//     setTimeout(() => {
//         console.log("Orders Fetched");
//         callback();
//     }, 1000);
// }

// login(() => {
//     getUser(() => {
//         getOrders(() => {
//             console.log("Showing Orders");
//         });
//     });
// });

// Q22.
// setTimeout(() => {
//     console.log("Level 1");

//     setTimeout(() => {
//         console.log("Level 2");

//         setTimeout(() => {
//             console.log("Level 3");

//             setTimeout(() => {
//                 console.log("Level 4");

//                 setTimeout(() => {
//                     console.log("Level 5");
//                 }, 1000);

//             }, 1000);

//         }, 1000);

//     }, 1000);

// }, 1000);

// Q23.
// function orderFood(callback) {
//     setTimeout(() => {
//         console.log("Food Ordered");
//         callback();
//     }, 1000);
// }

// function cookFood(callback) {
//     setTimeout(() => {
//         console.log("Food Cooked");
//         callback();
//     }, 1000);
// }

// function packFood(callback) {
//     setTimeout(() => {
//         console.log("Food Packed");
//         callback();
//     }, 1000);
// }

// function deliverFood(callback) {
//     setTimeout(() => {
//         console.log("Food Delivered");
//         callback();
//     }, 1000);
// }

// orderFood(() => {
//     cookFood(() => {
//         packFood(() => {
//             deliverFood(() => {
//                 console.log("Enjoy Your Meal");
//             });
//         });
//     });
// });

// Q24.
// function registration(callback) {
//     setTimeout(() => {
//         console.log("Registration Done");
//         callback();
//     }, 1000);
// }

// function doctorConsult(callback) {
//     setTimeout(() => {
//         console.log("Doctor Consultation Completed");
//         callback();
//     }, 1000);
// }

// function medicalTest(callback) {
//     setTimeout(() => {
//         console.log("Tests Completed");
//         callback();
//     }, 1000);
// }

// function medicine(callback) {
//     setTimeout(() => {
//         console.log("Medicine Issued");
//         callback();
//     }, 1000);
// }

// registration(() => {
//     doctorConsult(() => {
//         medicalTest(() => {
//             medicine(() => {
//                 console.log("Treatment Completed");
//             });
//         });
//     });
// });

// Q25.
// function submitForm(callback) {
//     setTimeout(() => {
//         console.log("Form Submitted");
//         callback();
//     }, 1000);
// }

// function verifyDocuments(callback) {
//     setTimeout(() => {
//         console.log("Documents Verified");
//         callback();
//     }, 1000);
// }

// function payment(callback) {
//     setTimeout(() => {
//         console.log("Payment Successful");
//         callback();
//     }, 1000);
// }

// function admission(callback) {
//     setTimeout(() => {
//         console.log("Admission Confirmed");
//         callback();
//     }, 1000);
// }

// submitForm(() => {
//     verifyDocuments(() => {
//         payment(() => {
//             admission(() => {
//                 console.log("Welcome to College");
//             });
//         });
//     });
// });

// Q26.
// function signup(callback) {
//     setTimeout(() => {
//         console.log("Signup Successful");
//         callback();
//     }, 1000);
// }

// function verifyEmail(callback) {
//     setTimeout(() => {
//         console.log("Email Verified");
//         callback();
//     }, 1000);
// }

// function login(callback) {
//     setTimeout(() => {
//         console.log("Login Successful");
//         callback();
//     }, 1000);
// }

// function dashboard() {
//     console.log("Dashboard Opened");
// }

// signup(() => {
//     verifyEmail(() => {
//         login(() => {
//             dashboard();
//         });
//     });
// });

// Q27.
// function randomTask(task, callback) {
//     let delay = Math.floor(Math.random() * 3000);

//     setTimeout(() => {
//         console.log(task + " Completed");
//         callback();
//     }, delay);
// }

// randomTask("Task 1", () => {
//     randomTask("Task 2", () => {
//         randomTask("Task 3", () => {
//             console.log("All Tasks Finished");
//         });
//     });
// });

// Q28.
// function fetchWeather(callback) {
//     setTimeout(() => {
//         const weather = {
//             city: "Delhi",
//             temp: "35°C"
//         };

//         callback(weather);
//     }, 2000);
// }

// fetchWeather((data) => {
//     console.log("City:", data.city);
//     console.log("Temperature:", data.temp);
// });

// Q29.
// function addToCart(callback) {
//     setTimeout(() => {
//         console.log("Product Added To Cart");
//         callback();
//     }, 1000);
// }

// function makePayment(callback) {
//     setTimeout(() => {
//         console.log("Payment Successful");
//         callback();
//     }, 1000);
// }

// function placeOrder(callback) {
//     setTimeout(() => {
//         console.log("Order Placed");
//         callback();
//     }, 1000);
// }

// function shipOrder(callback) {
//     setTimeout(() => {
//         console.log("Order Shipped");
//         callback();
//     }, 1000);
// }

// addToCart(() => {
//     makePayment(() => {
//         placeOrder(() => {
//             shipOrder(() => {
//                 console.log("Order Delivered Soon");
//             });
//         });
//     });
// });

// Q30.
// function selectMovie(callback) {
//     setTimeout(() => {
//         console.log("Movie Selected");
//         callback();
//     }, 1000);
// }

// function selectSeat(callback) {
//     setTimeout(() => {
//         console.log("Seat Selected");
//         callback();
//     }, 1000);
// }

// function makePayment(callback) {
//     setTimeout(() => {
//         console.log("Payment Done");
//         callback();
//     }, 1000);
// }

// function generateTicket(callback) {
//     setTimeout(() => {
//         console.log("Ticket Generated");
//         callback();
//     }, 1000);
// }

// selectMovie(() => {
//     selectSeat(() => {
//         makePayment(() => {
//             generateTicket(() => {
//                 console.log("Enjoy The Movie");
//             });
//         });
//     });
// });


// Q31.
// function showClock() {
//     setInterval(() => {
//         const now = new Date();
//         console.log(now.toLocaleTimeString());
//     }, 1000);
// }

// showClock();

// Q32.
// let seconds = 0;
// let timer = null;

// function start() {
//     if (!timer) {
//         timer = setInterval(() => {
//             seconds++;
//             console.log(seconds);
//         }, 1000);
//     }
// }

// function pause() {
//     clearInterval(timer);
//     timer = null;
// }

// function reset() {
//     clearInterval(timer);
//     timer = null;
//     seconds = 0;
//     console.log("Reset:", seconds);
// }

// // start();
// // pause();
// // reset();

// Q33.
// let lights = ["Red", "Yellow", "Green"];
// let index = 0;

// setInterval(() => {
//     console.log(lights[index]);
//     index = (index + 1) % lights.length;
// }, 2000);

// Q34. 
// const images = [
//     "image1.jpg",
//     "image2.jpg",
//     "image3.jpg"
// ];

// let current = 0;

// setInterval(() => {
//     console.log("Showing:", images[current]);

//     current = (current + 1) % images.length;
// }, 3000);

// Q35.
// const text = "Hello World";
// let index = 0;

// const typing = setInterval(() => {
//     process.stdout?.write?.(text[index] || "");

//     index++;

//     if (index === text.length) {
//         clearInterval(typing);
//     }
// }, 200);

// Q36.
// Output
// A
// D
// C
// B

// Q37.
// Output
// Two
// One

// Q38.
// Output
// Start
// End
// Timeout

// Q39.
// HTML
// <h2>Event Loop Visualizer</h2>

// <div id="stack">Call Stack</div>
// <div id="webapi">Web API</div>
// <div id="queue">Callback Queue</div>

// <button onclick="runDemo()">Run</button>
// JavaScript
// function runDemo() {

//     document.getElementById("stack").innerHTML =
//         "Call Stack: console.log()";

//     setTimeout(() => {

//         document.getElementById("queue").innerHTML =
//             "Callback Queue: setTimeout Callback";

//         setTimeout(() => {

//             document.getElementById("stack").innerHTML =
//                 "Call Stack: Executing Callback";

//         }, 1000);

//     }, 2000);

//     document.getElementById("webapi").innerHTML =
//         "Web API: Timer Running";
// }

// Q40.
// class TaskManager {

//     addTask(taskName, delay, callback) {

//         console.log(`Task Added: ${taskName}`);

//         setTimeout(() => {

//             console.log(`Task Completed: ${taskName}`);

//             if (callback) {
//                 callback();
//             }

//         }, delay);
//     }

// }

// const manager = new TaskManager();

// manager.addTask("Login", 2000, () => {

//     manager.addTask("Fetch User", 2000, () => {

//         manager.addTask("Fetch Orders", 2000, () => {

//             manager.addTask("Show Orders", 1000, () => {

//                 console.log("All Tasks Finished");

//             });

//         });

//     });

// });

