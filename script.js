
// Variables to hold income, expenses, and transactions
let totalIncome = 0;
let totalExpenses = 0;
let balance = 0;

// Function to add income
function addIncome() {
    const incomeDescription = document.getElementById('income-description').value;
    const incomeAmount = parseFloat(document.getElementById('income-amount').value);

    if (incomeDescription && !isNaN(incomeAmount)) {
        totalIncome += incomeAmount;
        updateSummary();
        addTransaction(incomeDescription, incomeAmount, 'Income');
    }
}

// Function to add expense
function addExpense() {
    const expenseDescription = document.getElementById('expense-description').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
    const expenseCategory = document.getElementById('expense-category').value;

    if (expenseDescription && !isNaN(expenseAmount)) {
        totalExpenses += expenseAmount;
        updateSummary();
        addTransaction(expenseDescription, expenseAmount, expenseCategory, 'Expense');
    }
}

// Function to add transactions to the table
function addTransaction(description, amount, category, type) {
    const transactionHistory = document.getElementById('transaction-history');
    const transactionRow = document.createElement('tr');

    transactionRow.innerHTML = `
        <td>${description}</td>
        <td>${category}</td>
        <td>${amount.toFixed(2)}</td>
        <td>${type}</td>
        <td><button onclick="deleteTransaction(this, ${amount}, '${type}')">Delete</button></td>
    `;

    transactionHistory.appendChild(transactionRow);
}

// Function to delete transaction
function deleteTransaction(button, amount, type) {
    button.parentElement.parentElement.remove();
    if (type === 'Income') {
        totalIncome -= amount;
    } else {
        totalExpenses -= amount;
    }
    updateSummary();
}

// Function to update summary
function updateSummary() {
    balance = totalIncome - totalExpenses;
    document.getElementById('total-income').innerText = totalIncome.toFixed(2);
    document.getElementById('total-expenses').innerText = totalExpenses.toFixed(2);
    document.getElementById('balance').innerText = balance.toFixed(2);
}

// Function to clear all transactions and reset values
function clearAll() {
    document.getElementById('transaction-history').innerHTML = '';
    totalIncome = 0;
    totalExpenses = 0;
    updateSummary();
}
