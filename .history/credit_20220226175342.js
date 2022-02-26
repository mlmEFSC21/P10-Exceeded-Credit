const customer = {
    lastName: "Doe",
    firstName: "John",
    accountNo: null,
    beginMonthBalance: null,
    monthlyCharges: null,
    monthlyCredits: null,
    creditLimit: null,
};

parseInt((customer.monthlyCharges = prompt("Enter the total charges for the month.")));
customer.monthlyCharges + 100;

console.log(customer.monthlyCharges);
