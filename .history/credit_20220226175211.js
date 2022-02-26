const customer = {
    lastName: "Doe",
    firstName: "John",
    accountNo: 123456789,
    beginMonthBalance: 500,
    monthlyCharges: 250,
    monthlyCredits: 300,
    creditLimit: 2000,
};

customer.monthlyCharges = prompt("Enter the total charges for the month.");

console.log(customer.monthlyCharges);
