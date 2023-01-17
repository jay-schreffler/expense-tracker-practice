

export const addNewExpense = (item,type,day,amount,balance) => {
    const addRow = table.insertRow(-1);
    const addItem = addRow.insertCell(0);   
    const addType = addRow.insertCell(1);   
    const addDay = addRow.insertCell(2); 
    const addAmount = addRow.insertCell(3); 
    const addBalance = addRow.insertCell(4); 
    addItem.textContent = item;
    addType.textContent = type;
    addDay.textContent = day;
    addAmount.textContent = amount;
    addBalance.textContent = balance;
};

