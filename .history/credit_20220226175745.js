const customer = {
    lastName: "Doe",
    firstName: "John",
    accountNo: null,
    beginMonthBalance: null,
    monthlyCharges: null,
    monthlyCredits: null,
    creditLimit: null,
};

customer.monthlyCharges = parseInt(prompt("Enter the total charges for the month."));
customer.monthlyCharges = customer.monthlyCharges + 100;

console.log(customer.monthlyCharges);
