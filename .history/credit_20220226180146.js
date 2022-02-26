const customer = {
    lastName: "Doe",
    firstName: "John",
    accountNo: null,
    beginMonthBalance: null,
    monthlyCharges: null,
    monthlyCredits: null,
    creditLimit: null,
    newBalance: null,
};

customer.accountNo = parseInt(prompt("Enter the account number."));
customer.beginMonthBalance = parseInt(
    prompt("Enter the beginning account balance for this month.")
);
customer.monthlyCharges = parseInt(prompt("Enter the total charges for this month."));
customer.monthlyCredits = parseInt(prompt("Enter the total credits for this month."));
customer.monthlyCharges = parseInt(prompt("Enter the credit limit."));

console.log(customer.monthlyCharges);
