let totalIncome = 0;
let totalExpenses = 0;

const incomeRecords = [];
const expenseRecords = [];

function addIncome() {
    const source = document.getElementById("incomeSource").value;
    const amount = parseFloat(document.getElementById("incomeAmount").value);
    if (source && amount > 0) {
        totalIncome += amount;
        incomeRecords.push({ source, amount }); // Store income record
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
        expenseRecords.push({ category, details, amount }); // Store expense record
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

// Generate PDF function
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Title
    doc.setFontSize(20);
    doc.text("Expense Tracker Report", 20, 20);

    // Income Section
    doc.setFontSize(16);
    doc.text("Income", 20, 40);
    let incomeY = 50;
    incomeRecords.forEach(record => {
        doc.text(`${record.source}: ${record.amount}`, 20, incomeY);
        incomeY += 10;
    });

    // Total Income
    doc.text(`Total Income: ${totalIncome}`, 20, incomeY);

    // Expense Section
    incomeY += 20;
    doc.text("Expenses", 20, incomeY);
    let expenseY = incomeY + 10;
    expenseRecords.forEach(record => {
        doc.text(`${record.category} - ${record.details}: ${record.amount}`, 20, expenseY);
        expenseY += 10;
    });

    // Total Expenses
    doc.text(`Total Expenses: ${totalExpenses}`, 20, expenseY);

    // Balance
    expenseY += 20;
    doc.text(`Balance: ${totalIncome - totalExpenses}`, 20, expenseY);

    // Save PDF
    doc.save("Expense_Tracker_Report.pdf");
}
