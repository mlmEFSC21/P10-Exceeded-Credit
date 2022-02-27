function creditCheck(balance, limit) {
    if (balance > limit) {
        const p7 = document.createElement("p");
        p7.innerHTML = limitExceeded;
    }
}

const customer = {
    lastName: "Doe",
    firstName: "John",
    accountNo: null,
    beginBalance: null,
    monthlyCharges: null,
    monthlyCredits: null,
    creditLimit: null,
    newBalance: null,
};

let accountNo = parseInt(prompt("Enter the account number."));
let beginBalance = parseInt(prompt("Enter the beginning account balance."));
let monthlyCharges = parseInt(prompt("Enter the total charges."));
let monthlyCredits = parseInt(prompt("Enter the total credits."));
let creditLimit = parseInt(prompt("Enter the credit limit."));

let newBalance = beginBalance + monthlyCharges - monthlyCredits;

const p1 = document.getElementById("p1");
p1.innerHTML = accountNo;
const p2 = document.getElementById("p2");
p2.innerHTML = beginBalance;
const p3 = document.getElementById("p3");
p3.innerHTML = monthlyCharges;
const p4 = document.getElementById("p4");
p4.innerHTML = monthlyCredits;
const p5 = document.getElementById("p5");
p5.innerHTML = creditLimit;
const p6 = document.getElementById("p6");
p6.innerHTML = newBalance;

let limitExceeded = "Credit limit exceeded";

creditCheck(newBalance, creditLimit);

customer.accountNo = accountNo;
customer.beginBalance = beginBalance;
customer.monthlyCharges = monthlyCharges;
customer.monthlyCredits = monthlyCredits;
customer.creditLimit = creditLimit;
customer.newBalance = newBalance;

console.log(customer.accountNo);
console.log(customer.beginBalance);
console.log(customer.monthlyCharges);
console.log(customer.monthlyCredits);
console.log(customer.creditLimit);
console.log(customer.newBalance);
