Q1. 
async function greet() {
    return "Hello World";
}

greet().then(console.log);

Q2. 
async function getUser() {
    return {
        id: 1,
        name: "Bhawna",
        age: 20
    };
}

getUser().then(console.log);

Q3. 
async function getProducts() {
    return ["Laptop", "Mobile", "Keyboard", "Mouse"];
}

getProducts().then(console.log);

Q4. 
async function getDate() {
    return new Date();
}

getDate().then(console.log);

Q5. 
async function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

getRandomNumber().then(console.log);

Q6.
async function getStudent() {
    return {
        name: "Bhawna",
        rollNo: 101,
        course: "BCA"
    };
}

getStudent().then(console.log);

Q7. 
async function getCompany() {
    return {
        company: "Google",
        location: "India",
        employees: 5000
    };
}

getCompany().then(console.log);

Q8. 
async function getCartItems() {
    return [
        "Laptop",
        "Headphones",
        "Mouse"
    ];
}

getCartItems().then(console.log);

Q9. 
async function getTotalAmount() {
    return 25999;
}

getTotalAmount().then(console.log);

Q10. 
async function testPromise() {
    return "Hello";
}

const result = testPromise();

console.log(result);
console.log(result instanceof Promise);

result.then(console.log);

Q11. 
async function getUser() {
    return {
        id: 1,
        name: "Bhawna"
    };
}

async function main() {
    const user = await getUser();
    console.log(user);
}

main();

Q12. 
async function getProduct() {
    return {
        id: 101,
        name: "Laptop",
        price: 50000
    };
}

async function main() {
    const product = await getProduct();
    console.log(product);
}

main();

Q13. 
async function getOrders() {
    return ["Order 1", "Order 2", "Order 3"];
}

async function main() {
    const orders = await getOrders();
    console.log(orders);
}

main();

Q14. 
async function getPayment() {
    return {
        amount: 2000,
        status: "Success"
    };
}

async function main() {
    const payment = await getPayment();
    console.log(payment);
}

main();

Q15. 
function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function main() {
    console.log("Waiting...");
    await wait(2000);
    console.log("Done");
}

main();

Q16.
function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function main() {
    console.log("Start");

    await wait(2000);

    console.log("End");
}

main();

Q17. 
function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function main() {
    console.log(1);

    await wait(1000);

    console.log(2);

    await wait(1000);

    console.log(3);
}

main();

Q18. 
function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function greet(name) {
    await wait(1000);
    console.log(`Hello, ${name}!`);
}

greet("Bhawna");

Q19. 
function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function verifyOTP() {
    console.log("Verifying OTP...");

    await wait(2000);

    console.log("OTP Verified");
}

verifyOTP();

Q20. 
function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function login() {
    console.log("Logging in...");

    await wait(3000);

    console.log("Login Successful");
}

login();

Q21. 
async function getData() {
    throw new Error("Something went wrong");
}

async function main() {
    try {
        await getData();
    } catch (error) {
        console.log(error.message);
    }
}

main();

Q22. 
async function login(username, password) {
    if (username !== "admin" || password !== "1234") {
        throw new Error("Invalid Login");
    }

    return "Login Successful";
}

async function main() {
    try {
        const result = await login("admin", "1111");
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

main();

Q23. 
async function withdraw(balance, amount) {
    if (amount > balance) {
        throw new Error("Insufficient Balance");
    }

    return balance - amount;
}

async function main() {
    try {
        const remaining = await withdraw(5000, 7000);
        console.log(remaining);
    } catch (error) {
        console.log(error.message);
    }
}

main();

Q24. 
async function payment(amount) {
    if (amount <= 0) {
        throw new Error("Invalid Amount");
    }

    return "Payment Successful";
}

async function main() {
    try {
        const result = await payment(2000);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

main();

Q25. 
async function register(name, email) {
    if (!name || !email) {
        throw new Error("All fields are required");
    }

    return "Registration Successful";
}

async function main() {
    try {
        const result = await register("Bhawna", "");
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

main();

Q26. 
async function validateEmail(email) {
    if (!email.includes("@")) {
        throw new Error("Invalid Email");
    }

    return "Valid Email";
}

async function main() {
    try {
        const result = await validateEmail("bhawna.com");
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

main();

Q27. 
async function validatePassword(password) {
    if (password.length < 8) {
        throw new Error("Password must be at least 8 characters");
    }

    return "Strong Password";
}

async function main() {
    try {
        const result = await validatePassword("abc123");
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

main();

Q28. 
async function atm(balance, amount) {
    if (amount > balance) {
        throw new Error("Transaction Failed");
    }

    return `Cash Withdrawn: ₹${amount}`;
}

async function main() {
    try {
        const result = await atm(10000, 3000);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

main();

Q29. 
async function purchase(stock) {
    if (stock === 0) {
        throw new Error("Product Out of Stock");
    }

    return "Purchase Successful";
}

async function main() {
    try {
        const result = await purchase(5);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

main();

Q30. 
async function cancelOrder(orderStatus) {
    if (orderStatus === "Delivered") {
        throw new Error("Delivered order cannot be cancelled");
    }

    return "Order Cancelled Successfully";
}

async function main() {
    try {
        const result = await cancelOrder("Pending");
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

main();

Q31. 
function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function login() {
    await wait(1000);
    console.log("Login Successful");
}

async function getUser() {
    await wait(1000);
    console.log("User Details Fetched");
}

async function getOrders() {
    await wait(1000);
    console.log("Orders Fetched");
}

async function payment() {
    await wait(1000);
    console.log("Payment Successful");
}

async function main() {
    await login();
    await getUser();
    await getOrders();
    await payment();
}

main();

Q32.
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function selectMovie() {
    await wait(1000);
    console.log(" Movie Selected");
}

async function selectSeat() {
    await wait(1000);
    console.log("Seat Selected");
}

async function makePayment() {
    await wait(1000);
    console.log("Payment Done");
}

async function bookTicket() {
    await wait(1000);
    console.log("Ticket Booked");
}

async function main() {
    await selectMovie();
    await selectSeat();
    await makePayment();
    await bookTicket();
}

main();

Q33. 
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function chooseFood() {
    await wait(1000);
    console.log("Food Selected");
}

async function placeOrder() {
    await wait(1000);
    console.log("Order Placed");
}

async function payment() {
    await wait(1000);
    console.log("Payment Successful");
}

async function delivery() {
    await wait(1000);
    console.log("Food Delivered");
}

async function main() {
    await chooseFood();
    await placeOrder();
    await payment();
    await delivery();
}

main();

Q34. 
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function searchTrain() {
    await wait(1000);
    console.log("Train Found");
}

async function selectSeat() {
    await wait(1000);
    console.log("Seat Selected");
}

async function payment() {
    await wait(1000);
    console.log("Payment Successful");
}

async function ticketBooked() {
    await wait(1000);
    console.log("Ticket Booked");
}

async function main() {
    await searchTrain();
    await selectSeat();
    await payment();
    await ticketBooked();
}

main();

Q35. 
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function registration() {
    await wait(1000);
    console.log("Registration Completed");
}

async function documentVerification() {
    await wait(1000);
    console.log("Documents Verified");
}

async function feePayment() {
    await wait(1000);
    console.log("Fee Paid");
}

async function admissionConfirmed() {
    await wait(1000);
    console.log("Admission Confirmed");
}

async function main() {
    await registration();
    await documentVerification();
    await feePayment();
    await admissionConfirmed();
}

main();

Q36.
function getUsers() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Users Loaded");
        }, 2000);
    });
}

function getProducts() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Products Loaded");
        }, 1000);
    });
}

function getOrders() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Orders Loaded");
        }, 3000);
    });
}

async function main() {
    const result = await Promise.all([
        getUsers(),
        getProducts(),
        getOrders()
    ]);

    console.log(result);
}

main();

Q37. 
function api1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("API 1"), 1000);
    });
}

function api2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("API 2"), 2000);
    });
}

function api3() {
    return new Promise(resolve => {
        setTimeout(() => resolve("API 3"), 3000);
    });
}

function api4() {
    return new Promise(resolve => {
        setTimeout(() => resolve("API 4"), 1500);
    });
}

function api5() {
    return new Promise(resolve => {
        setTimeout(() => resolve("API 5"), 2500);
    });
}

async function main() {
    const result = await Promise.all([
        api1(),
        api2(),
        api3(),
        api4(),
        api5()
    ]);

    console.log(result);
}

main();

Q38. 
function getUser() {
    return new Promise(resolve => {
        setTimeout(() => resolve("User"), 1000);
    });
}

function getOrders() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Orders"), 2000);
    });
}

function getProducts() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Products"), 1500);
    });
}

function getNotifications() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Notifications"), 1200);
    });
}

async function loadDashboard() {
    const data = await Promise.all([
        getUser(),
        getOrders(),
        getProducts(),
        getNotifications()
    ]);

    console.log(data);
}

loadDashboard();

Q39. 
function image1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Image 1 Loaded"), 1000);
    });
}

function image2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Image 2 Loaded"), 2000);
    });
}

function image3() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Image 3 Loaded"), 1500);
    });
}

async function loadGallery() {
    const images = await Promise.all([
        image1(),
        image2(),
        image3()
    ]);

    console.log(images);
}

loadGallery();

Q40.
function downloadFile1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("File 1 Downloaded"), 1000);
    });
}

function downloadFile2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("File 2 Downloaded"), 2000);
    });
}

function downloadFile3() {
    return new Promise(resolve => {
        setTimeout(() => resolve("File 3 Downloaded"), 3000);
    });
}

async function downloadFiles() {
    const files = await Promise.all([
        downloadFile1(),
        downloadFile2(),
        downloadFile3()
    ]);

    console.log(files);
}

downloadFiles();

Q41.
function api1() {
    return Promise.resolve("API 1 Success");
}

function api2() {
    return Promise.resolve("API 2 Success");
}

function api3() {
    return Promise.resolve("API 3 Success");
}

function api4() {
    return Promise.reject("API 4 Failed");
}

function api5() {
    return Promise.reject("API 5 Failed");
}

async function main() {
    const result = await Promise.allSettled([
        api1(),
        api2(),
        api3(),
        api4(),
        api5()
    ]);

    console.log(result);
}

main();

Q42. 
function getUsers() {
    return Promise.resolve("Users Loaded");
}

function getOrders() {
    return Promise.resolve("Orders Loaded");
}

function getProducts() {
    return Promise.reject("Products API Failed");
}

function getReports() {
    return Promise.resolve("Reports Loaded");
}

async function loadDashboard() {
    const result = await Promise.allSettled([
        getUsers(),
        getOrders(),
        getProducts(),
        getReports()
    ]);

    console.log(result);
}

loadDashboard();

Q43. 
function uploadFile1() {
    return Promise.resolve("File 1 Uploaded");
}

function uploadFile2() {
    return Promise.reject("File 2 Upload Failed");
}

function uploadFile3() {
    return Promise.resolve("File 3 Uploaded");
}

function uploadFile4() {
    return Promise.reject("File 4 Upload Failed");
}

async function uploadFiles() {
    const result = await Promise.allSettled([
        uploadFile1(),
        uploadFile2(),
        uploadFile3(),
        uploadFile4()
    ]);

    console.log(result);
}

uploadFiles();

Q44. 
function student1() {
    return Promise.resolve("Aman - Passed");
}

function student2() {
    return Promise.reject("Riya - Result Missing");
}

function student3() {
    return Promise.resolve("Bhawna - Passed");
}

function student4() {
    return Promise.reject("Rahul - Absent");
}

async function processResults() {
    const result = await Promise.allSettled([
        student1(),
        student2(),
        student3(),
        student4()
    ]);

    console.log(result);
}

processResults();

Q45. 
function server1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Server 1 Response");
        }, 3000);
    });
}

function server2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Server 2 Response");
        }, 1000);
    });
}

function server3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Server 3 Response");
        }, 2000);
    });
}

async function main() {
    const result = await Promise.race([
        server1(),
        server2(),
        server3()
    ]);

    console.log(result);
}

main();

Q46. 
function server1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Server 1 Failed");
        }, 1000);
    });
}

function server2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Server 2 Failed");
        }, 2000);
    });
}

function server3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Server 3 Success");
        }, 3000);
    });
}

async function main() {
    try {
        const result = await Promise.any([
            server1(),
            server2(),
            server3()
        ]);

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

main();

Q47. 
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Received");
        }, 5000);
    });
}

function timeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Request Timed Out");
        }, 3000);
    });
}

async function main() {
    try {
        const result = await Promise.race([
            fetchData(),
            timeout()
        ]);

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

main();

Q48. 
async function* getNames() {
    yield "Ram";
    yield "Shyam";
    yield "Mohan";
}

async function main() {
    for await (const name of getNames()) {
        console.log(name);
    }
}

main();


Q49. 
class NotesManager {
    constructor() {
        this.notes = [];
    }

    async addNote(note) {
        this.notes.push(note);
        return "Note Added";
    }

    async deleteNote(index) {
        if (index < 0 || index >= this.notes.length) {
            throw new Error("Note Not Found");
        }

        this.notes.splice(index, 1);
        return "Note Deleted";
    }

    async updateNote(index, newNote) {
        if (index < 0 || index >= this.notes.length) {
            throw new Error("Note Not Found");
        }

        this.notes[index] = newNote;
        return "Note Updated";
    }

    async fetchNotes() {
        return this.notes;
    }
}

async function main() {

    const notes = new NotesManager();

    console.log(await notes.addNote("Learn JavaScript"));

    console.log(await notes.addNote("Learn Async Await"));

    console.log(await notes.fetchNotes());

    console.log(await notes.updateNote(0, "Master JavaScript"));

    console.log(await notes.fetchNotes());

    console.log(await notes.deleteNote(1));

    console.log(await notes.fetchNotes());

}

main();

Q50. 
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function login() {
    await wait(1000);
    console.log("Login Successful");
}

async function getUser() {
    await wait(1000);
    console.log("User Loaded");
}

async function getProducts() {
    await wait(1000);
    console.log("Products Loaded");
}

async function getCart() {
    await wait(1000);
    console.log("Cart Loaded");
}

async function applyCoupon() {
    await wait(1000);
    console.log("Coupon Applied");
}

async function calculateTotal() {
    await wait(1000);
    console.log("Total Calculated");
}

async function payment() {
    await wait(1000);
    console.log("Payment Successful");
}

async function generateInvoice() {
    await wait(1000);
    console.log("Invoice Generated");
}

async function sendEmail() {
    await wait(1000);
    console.log("Email Sent");
}

async function trackOrder() {
    await wait(1000);
    console.log("Order Tracking Started");
}

async function delivery() {
    await wait(1000);
    console.log("Order Delivered");
}

async function placeOrder() {

    try {

        await login();

        await getUser();

        await getProducts();

        await getCart();

        await applyCoupon();

        await calculateTotal();

        await payment();

        await generateInvoice();

        await sendEmail();

        await trackOrder();

        await delivery();

        console.log("Order Completed Successfully");

    } catch (error) {

        console.log("Error:", error.message);

    }
}

placeOrder();
