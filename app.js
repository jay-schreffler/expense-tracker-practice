import {sendData} from '../modules/database.js'
import {addNewExpenseToTable} from '../modules/table.js'

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

const table = document.querySelector('#table');
// const newRow = document.createElement('tr');
// const newData = document.createElement('td');

//data arrays

const expenseArray = [];
const incomeAttay = [];

// ---------------------------------------------------------------------------------------------------------------------
//v1 add expense items to table - no array/object
// addNewExpenseButton.addEventListener('click', () => {
//     addNewExpense(newItem.value,newType.value,newDayOfMonth.value,newAmount.value,newBalance.value);
//     newItem.value = ' ';
//     newDayOfMonth.value = ' ';
//     newAmount.value = ' ';
//     newBalance.value = ' ';
// })
// ---------------------------------------------------------------------------------------------------------------------

//listeners

addNewExpenseButton.addEventListener('click', () => {
    const expense = {
        item: newItem.value,
        type: newType.value,
        date: newDayOfMonth.value,
        amount: newAmount.value,
        balance: newBalance.value
    }
    sendData(expense);
    newItem.value = ' ';
    newDayOfMonth.value = ' ';
    newAmount.value = 0;
    newBalance.value = 0;
    location.reload()
    loadTable();
})

//fetch call 

const loadTable = ()=> {
    const getDatabase = 'https://x8ki-letl-twmt.n7.xano.io/api:IowF6OTv/expense'
    fetch(getDatabase)
    .then((res) => res.json())
    .then((data) => {
        for(let i = 0; i < data.length; i++) {
            addNewExpenseToTable(`${data[i].item}`,`${data[i].type}`,`${data[i].date}`,`$${data[i].amount}`,`$${data[i].balance}`)
        }
    })

}

loadTable();
