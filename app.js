import {addNewExpense} from '../modules/table.js'

const expenseBarGraph = document.querySelector('#expense-bar-graph');
const incomeBarGraph = document.querySelector('#income-bar-graph');
const totalIncomeDisplay = document.querySelector('#income-total');
const totalExpenseDisplay = document.querySelector('#expense-total');
const remainingBalanceDisplay = document.querySelector('#remaining-total');

// inputs
const newItem = document.querySelector('#item');
const newDayOfMonth = document.querySelector('#day-of-month');
const newAmount = document.querySelector('#amount');
const newBalance = document.querySelector('#balance');
const newType = document.querySelector('#type');
const addNewExpenseButton = document.querySelector('#add-new-expense');

//table

const table = document.querySelector('#table-body');
// const newRow = document.createElement('tr');
// const newData = document.createElement('td');

addNewExpenseButton.addEventListener('click', () => {
    addNewExpense(newItem.value,newType.value,newDayOfMonth.value,newAmount.value,newBalance.value);
    newItem.value = ' ';
    newDayOfMonth.value = ' ';
    newAmount.value = ' ';
    newBalance.value = ' ';
})