let totalIncome = 0;
let totalExpenses = 0;

function addIncome() {
    const source = document.getElementById("incomeSource").value;
    const amount = parseFloat(document.getElementById("incomeAmount").value);
    if (source && amount > 0) {
        totalIncome += amount;
        document.getElementById("totalIncome").innerText = totalIncome;
        document.getElementById("incomeList").innerHTML += `<li>${source}: ${amount}</li>`;
        document.getElementById("incomeSource").value = '';
        document.getElementById("incomeAmount").value = '';
        updateBalance();
    }
}

function addExpense() {
    const category = document.getElementById("expenseCategory").value;
    const details = document.getElementById("expenseDetails").value;
    const amount = parseFloat(document.getElementById("expenseAmount").value);
    if (details && amount > 0) {
        totalExpenses += amount;
        document.getElementById("totalExpenses").innerText = totalExpenses;
        document.getElementById("expenseList").innerHTML += `<li>${category} - ${details}: ${amount}</li>`;
        document.getElementById("expenseDetails").value = '';
        document.getElementById("expenseAmount").value = '';
        updateBalance();
    }
}

function updateBalance() {
    const balance = totalIncome - totalExpenses;
    document.getElementById("balance").innerText = balance;
}
