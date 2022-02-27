function creditCheck(balance, limit) {
    if (balance > limit) {
        return alert(limitExceeded);
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
