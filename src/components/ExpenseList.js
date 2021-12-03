import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList(props) {
    const list = props.searchMode ? props.expenseList.filter((e) => e.name.toLowerCase().includes(props.inputSearch.toLowerCase())) : props.expenseList;
    const expenseList = list.map((e) => 
      <li key={e.name.toLowerCase().replace(/\s/g, '-')}>
        <ExpenseItem name={e.name} cost={e.cost} deleteExpense={props.deleteExpense} />
      </li>);
    return (
        <div className="ExpenseList">
            <h2>Expenses</h2>
            <input type="text" name="inputSearch" id="inputSearch" placeholder="Type to search..." value={props.inputSearch} onChange={props.searchExpense} />
            <ul>{expenseList}</ul>
        </div>
    );
}

export default ExpenseList;