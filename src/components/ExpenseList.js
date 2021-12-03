import React from 'react';

function ExpenseList(props) {
    return (
        <div className="ExpenseList">
            <h2>Expenses</h2>
            <input type="text" name="inputSearch" id="inputSearch" placeholder="Type to search..." value={props.inputSearch} onChange={props.searchExpense} />
            <ul>{props.expenseList}</ul>
        </div>
    );
}

export default ExpenseList;