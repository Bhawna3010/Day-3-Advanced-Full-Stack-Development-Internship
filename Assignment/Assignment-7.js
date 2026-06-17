Q1. 
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World");
    }, 2000);
});

promise1.then((msg) => {
    console.log(msg);
});

Q2. 
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Server Down");
    }, 3000);
});

promise2.catch((err) => {
    console.log(err);
});

Q3. 
const promise3 = new Promise((resolve, reject) => {
    const random = Math.random();

    if (random > 0.5) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

promise3
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));

Q4. 
function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("Eligible");
        } else {
            reject("Not Eligible");
        }
    });
}

checkAge(20)
    .then((msg) => console.log(msg))
.catch((err) => console.log(err));

Q5. 
function validatePassword(password) {
    return new Promise((resolve, reject) => {
        if (password.length >= 8) {
            resolve("Valid Password");
        } else {
            reject("Password too short");
        }
    });
}

validatePassword("abc12345")
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));

Q6. 
function validateEmail(email) {
    return new Promise((resolve, reject) => {
        if (email.includes("@")) {
            resolve("Valid Email");
        } else {
            reject("Invalid Email");
        }
    });
}

validateEmail("test@gmail.com")
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));

Q7. 
function withdraw(balance, amount) {
    return new Promise((resolve, reject) => {
        if (balance >= amount) {
            resolve(`Withdrawal Successful. Remaining Balance: ${balance - amount}`);
        } else {
            reject("Insufficient Balance");
        }
    });
}

withdraw(1000, 500)
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));

Q8. 
function atmTransaction(pin) {
    return new Promise((resolve, reject) => {
        if (pin === 1234) {
            resolve("Transaction Approved");
        } else {
            reject("Invalid PIN");
        }
    });
}

atmTransaction(1234)
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));

Q9. 
const promise9 = new Promise((resolve, reject) => {
    resolve({
        id: 1,
        name: "Bhawna",
        age: 20
    });
});

promise9.then((user) => {
    console.log(user);
});

Q10.
const promise10 = new Promise((resolve, reject) => {
    reject({
        code: 404,
        message: "User Not Found"
    });
});

promise10.catch((error) => {
    console.log(error.code);
    console.log(error.message);
});


Q11.
Promise.resolve(10)
.then((num) => {
    console.log(num);
    return num * 2;
})
.then((num) => {
    console.log(num);
    return num * 2;
})
.then((num) => {
    console.log(num);
    return num * 2;
})
.then((num) => {
    console.log(num);
});

Q12. 
Promise.resolve("Ram")
.then((name) => {
    console.log(name);
    return name.toUpperCase();
})
.then((name) => {
    console.log(name);
    return name + " MOHAN";
})
.then((name) => {
    console.log(name);
    return name + " DIXIT";
})
.then((name) => {
    console.log(name);
});

Q13.
Promise.resolve(1000)
.then((price) => {
    console.log("Original Price:", price);
    return price + price * 0.18;
})
.then((price) => {
    console.log("After GST:", price);
    return price - price * 0.10;
})
.then((price) => {
    console.log("Final Price:", price);
});

Q14. 
Promise.resolve("Login Success")
.then((msg) => {
    console.log(msg);
    return "User Found";
})
.then((user) => {
    console.log(user);
    return "Orders Loaded";
})
.then((orders) => {
    console.log(orders);
    return "Payment Details Loaded";
})
.then((payment) => {
    console.log(payment);
});

Q15.
Promise.resolve("Movie Selected")
.then((msg) => {
    console.log(msg);
    return "Seat Selected";
})
.then((msg) => {
    console.log(msg);
    return "Payment Done";
})
.then((msg) => {
    console.log(msg);
    return "Ticket Confirmed";
})
.then((msg) => {
    console.log(msg);
});

Q16. 
Promise.resolve("Food Selected")
.then((msg) => {
    console.log(msg);
    return "Order Placed";
})
.then((msg) => {
    console.log(msg);
    return "Food Prepared";
})
.then((msg) => {
    console.log(msg);
    return "Out For Delivery";
})
.then((msg) => {
    console.log(msg);
    return "Delivered";
})
.then((msg) => {
    console.log(msg);
});

Q17.
Promise.resolve("Form Submitted")
.then((msg) => {
    console.log(msg);
    return "Documents Verified";
})
.then((msg) => {
    console.log(msg);
    return "Interview Cleared";
})
.then((msg) => {
    console.log(msg);
    return "Admission Confirmed";
})
.then((msg) => {
    console.log(msg);
});

Q18.
Promise.resolve("Search Train")
.then((msg) => {
    console.log(msg);
    return "Select Seat";
})
.then((msg) => {
    console.log(msg);
    return "Payment Success";
})
.then((msg) => {
    console.log(msg);
    return "Ticket Booked";
})
.then((msg) => {
    console.log(msg);
});

Q19.
Promise.resolve()
.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1");
            resolve();
        }, 1000);
    });
})
.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 2");
            resolve();
        }, 1000);
    });
})
.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 3");
            resolve();
        }, 1000);
    });
});

Q20.
Promise.resolve(0)
.then((n) => { console.log(++n); return n; })
.then((n) => { console.log(++n); return n; })
.then((n) => { console.log(++n); return n; })
.then((n) => { console.log(++n); return n; })
.then((n) => { console.log(++n); return n; })
.then((n) => { console.log(++n); return n; })
.then((n) => { console.log(++n); return n; })
.then((n) => { console.log(++n); return n; })
.then((n) => { console.log(++n); return n; })
.then((n) => { console.log(++n); return n; });

Q21.
Promise.resolve("Start")
.then((msg) => {
    console.log(msg);
    throw new Error("Something Went Wrong");
})
.catch((error) => {
    console.log(error.message);
});

Q22. 
Promise.resolve(1)
.then((num) => {
    console.log("Step 1");
    return num + 1;
})
.then((num) => {
    console.log("Step 2");
    return num + 1;
})
.then((num) => {
    console.log("Step 3");
    throw new Error("Error at Step 3");
})
.then(() => {
    console.log("Step 4");
})
.then(() => {
    console.log("Step 5");
})
.catch((error) => {
    console.log(error.message);
});

Q23. 
Promise.resolve()
.then(() => {
    console.log("Step 1");
})
.then(() => {
    console.log("Step 2");
    throw new Error("Something Failed");
})
.catch((error) => {
    console.log("Catch:", error.message);
});

Q24.
Promise.resolve()
.then(() => {
    console.log("Step 1");
    throw new Error("Network Error");
})
.catch((error) => {
    console.log("Caught:", error.message);
    return "Recovered Data";
})
.then((data) => {
    console.log(data);
});

Q25. 
Promise.resolve()
.then(() => {
    console.log("Start");
    throw new Error("First Error");
})
.catch((error) => {
    console.log("Catch 1:", error.message);
})
.catch((error) => {
    console.log("Catch 2:", error.message);
});

Q26.
Callback 
function greet(name, callback) {
    callback(`Hello ${name}`);
}

greet("Bhawna", (msg) => {
    console.log(msg);
});
Promise 
function greet(name) {
    return new Promise((resolve, reject) => {
        resolve(`Hello ${name}`);
    });
}

greet("Bhawna")
.then((msg) => {
    console.log(msg);
});

Q27. 
Callback 
function add(a, b, callback) {
    callback(a + b);
}

add(10, 20, (result) => {
    console.log(result);
});
Promise 
function add(a, b) {
    return new Promise((resolve, reject) => {
        resolve(a + b);
    });
}

add(10, 20)
.then((result) => {
    console.log(result);
});

Q28. 
Callback 
function login(username, password, callback) {
    if (password === "1234") {
        callback("Login Successful");
    } else {
        callback("Login Failed");
    }
}

login("admin", "1234", (msg) => {
    console.log(msg);
});
Promise
function login(username, password) {
    return new Promise((resolve, reject) => {
        if (password === "1234") {
            resolve("Login Successful");
        } else {
            reject("Invalid Password");
        }
    });
}

login("admin", "1234")
.then((msg) => {
    console.log(msg);
})
.catch((err) => {
    console.log(err);
});

Q29.
Callback 
function downloadFile(callback) {
    setTimeout(() => {
        callback("File Downloaded");
    }, 2000);
}

downloadFile((msg) => {
    console.log(msg);
});
Promise 
function downloadFile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("File Downloaded");
        }, 2000);
    });
}

downloadFile()
.then((msg) => {
    console.log(msg);
});

Q30.
Callback 
function getWeather(callback) {
    setTimeout(() => {
        callback("Temperature: 35°C");
    }, 1000);
}

getWeather((data) => {
    console.log(data);
});
Promise 
function getWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Temperature: 35°C");
        }, 1000);
    });
}

getWeather()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
});

Q31.
const userPromise = Promise.resolve("User Data");
const ordersPromise = Promise.resolve("Orders Data");
const productsPromise = Promise.resolve("Products Data");

Promise.all([userPromise, ordersPromise, productsPromise])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

Q32. 
const p1 = new Promise(resolve =>
    setTimeout(() => resolve("Promise 1"), 1000)
);

const p2 = new Promise(resolve =>
    setTimeout(() => resolve("Promise 2"), 2000)
);

const p3 = new Promise(resolve =>
    setTimeout(() => resolve("Promise 3"), 3000)
);

const p4 = new Promise(resolve =>
    setTimeout(() => resolve("Promise 4"), 4000)
);

const p5 = new Promise(resolve =>
    setTimeout(() => resolve("Promise 5"), 5000)
);

Promise.all([p1, p2, p3, p4, p5])
.then((result) => {
    console.log(result);
});

Q33.
const p1 = Promise.resolve("Data 1");
const p2 = Promise.resolve("Data 2");
const p3 = Promise.reject("Server Error");

Promise.all([p1, p2, p3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});


Q34. 
const profile = new Promise(resolve =>
    setTimeout(() => resolve("Profile Loaded"), 1000)
);

const notifications = new Promise(resolve =>
    setTimeout(() => resolve("Notifications Loaded"), 2000)
);

const messages = new Promise(resolve =>
    setTimeout(() => resolve("Messages Loaded"), 1500)
);

Promise.all([profile, notifications, messages])
.then((result) => {
    console.log("Dashboard Ready");
    console.log(result);
});

Q35.
function downloadFile(fileName, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${fileName} Downloaded`);
        }, delay);
    });
}

const file1 = downloadFile("File1.pdf", 2000);
const file2 = downloadFile("File2.pdf", 3000);
const file3 = downloadFile("File3.pdf", 1000);

Promise.all([file1, file2, file3])
.then((files) => {
    console.log("All Files Downloaded");
    console.log(files);
});

Q36. 
const p1 = Promise.resolve("Success 1");
const p2 = Promise.resolve("Success 2");
const p3 = Promise.resolve("Success 3");
const p4 = Promise.reject("Failed 1");
const p5 = Promise.reject("Failed 2");

Promise.allSettled([p1, p2, p3, p4, p5])
.then((results) => {
    console.log(results);
});

Q37.
const users = Promise.resolve("Users Loaded");
const reports = Promise.reject("Reports API Failed");
const analytics = Promise.resolve("Analytics Loaded");

Promise.allSettled([users, reports, analytics])
.then((results) => {
    results.forEach((result) => {
        if (result.status === "fulfilled") {
            console.log(result.value);
        } else {
            console.log(result.reason);
        }
    });
});

Q38. 
function uploadFile(fileName, success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            success
                ? resolve(`${fileName} Uploaded`)
                : reject(`${fileName} Failed`);
        }, 1000);
    });
}

Promise.allSettled([
    uploadFile("file1.jpg", true),
    uploadFile("file2.jpg", false),
    uploadFile("file3.jpg", true),
    uploadFile("file4.jpg", false)
])
.then((results) => {
    console.log(results);
});


Q39. Promise.race()

const server1 = new Promise(resolve =>
    setTimeout(() => resolve("Server 1 Response"), 5000)
);

const server2 = new Promise(resolve =>
    setTimeout(() => resolve("Server 2 Response"), 2000)
);

const server3 = new Promise(resolve =>
    setTimeout(() => resolve("Server 3 Response"), 1000)
);

Promise.race([server1, server2, server3])
.then((result) => {
    console.log(result);
});

Promise.any()

const server1 = Promise.reject("Server 1 Failed");
const server2 = Promise.reject("Server 2 Failed");

const server3 = new Promise(resolve =>
    setTimeout(() => resolve("Server 3 Success"), 1000)
);

Promise.any([server1, server2, server3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

Q40.
function randomFail(stepName) {
    return Math.random() < 0.3; 
}

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            randomFail("Login")
                ? reject("Login Failed")
                : resolve("Login Success");
        }, 1000);
    });
}

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User Data Loaded");
        }, 1000);
    });
}

function fetchRestaurants() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            randomFail("Restaurants")
                ? reject("Restaurants Service Down")
                : resolve("Restaurants Loaded");
        }, 1000);
    });
}

function fetchMenu() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Menu Loaded");
        }, 1000);
    });
}

function placeOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order Placed");
        }, 1000);
    });
}

function processPayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            randomFail("Payment")
                ? reject("Payment Failed")
                : resolve("Payment Successful");
        }, 1000);
    });
}

function generateInvoice() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Invoice Generated");
        }, 1000);
    });
}

function sendEmail() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Email Sent");
        }, 1000);
    });
}

function trackOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order Tracking Started");
        }, 1000);
    });
}

function deliverOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order Delivered");
        }, 1000);
    });
}

// Promise Chaining

login()
.then((msg) => {
    console.log(msg);
    return fetchUser();
})
.then((msg) => {
    console.log(msg);
    return fetchRestaurants();
})
.then((msg) => {
    console.log(msg);
    return fetchMenu();
})
.then((msg) => {
    console.log(msg);
    return placeOrder();
})
.then((msg) => {
    console.log(msg);
    return processPayment();
})
.then((msg) => {
    console.log(msg);
    return generateInvoice();
})
.then((msg) => {
    console.log(msg);
    return sendEmail();
})
.then((msg) => {
    console.log(msg);
    return trackOrder();
})
.then((msg) => {
    console.log(msg);
    return deliverOrder();
})
.then((msg) => {
    console.log(msg);
    console.log("Food Delivery Completed Successfully");
})

// Catch Propagation
.catch((error) => {
    console.log("Error:", error);
})

// Finally
.finally(() => {
    console.log("Process Finished");
});

💀 INTERVIEW OUTPUT ROUND (BONUS)
Q1.
Output
B
A

Q2.
Output
A
C
B

Q3.
Output
25

Q4.
Output
Error

Q5.
Output
Boom

Q6.
Output
100

Q7.
Output
A
B

Q8.
Output
[1, 2, 3]

Q9.
Output
Failed


Q10.
Output
Start
End
A
B