let expenseTotal, balanceTotal;

// * Income and Expenses
document.getElementById("btn-calculate").addEventListener("click", function () {
    const income = getInputValueById("income-field"),
        food = getInputValueById("food-expense-field"),
        rent = getInputValueById("rent-expense-field"),
        cloths = getInputValueById("cloths-expense-field");

    expenseTotal = food + rent + cloths;
    balanceTotal = income - expenseTotal;

    setTextById("expense-total", expenseTotal);
    setTextById("balance-total", balanceTotal);
});

document.getElementById("btn-save").addEventListener("click", function () {
    const discount = getInputValueById("discount-field");

    const amountSaved = expenseTotal * (discount / 100);

    setTextById("saved-amount", amountSaved);
    setTextById("new-balance", balanceTotal + amountSaved);
});
