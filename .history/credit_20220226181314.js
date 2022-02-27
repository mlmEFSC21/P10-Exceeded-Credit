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

customer.accountNo = parseInt(prompt("Enter the account number."));
customer.beginBalance = parseInt(prompt("Enter the beginning account balance."));
customer.monthlyCharges = parseInt(prompt("Enter the total charges."));
customer.monthlyCredits = parseInt(prompt("Enter the total credits."));
customer.creditLimit = parseInt(prompt("Enter the credit limit."));

customer.newBalance = customer.beginBalance + monthlyCharges - monthlyCredits;
if (customer.newBalance > customer.creditLimit) {
    return Alert("Credit limit exceeded");
}

console.log(customer.accountNo);
console.log(customer.beginBalance);
console.log(customer.monthlyCharges);
console.log(customer.monthlyCredits);
console.log(customer.creditLimit);
console.log(customer.newBalance);
