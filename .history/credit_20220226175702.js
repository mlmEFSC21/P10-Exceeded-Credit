const customer = {
    lastName: "Doe",
    firstName: "John",
    accountNo: null,
    beginMonthBalance: null,
    monthlyCharges: null,
    monthlyCredits: null,
    creditLimit: null,
};

charges = prompt("Enter the total charges for the month.");
parseInt(charges);
customer.monthlyCharges = customer.monthlyCharges + 100;

console.log(customer.monthlyCharges);
