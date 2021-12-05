import React from 'react';
import ExpenseItem from './ExpenseItem';
import styled from "styled-components";

const ExpenseListUL = styled.ul`
  margin: .75rem 0 1rem;
  list-style-type: none;
  height: 15em;
  overflow: auto;

  li {
    padding: .75rem;
    border: 1px solid #e1e3e4;
  }
`;

function ExpenseList(props) {
    const list = props.searchMode ? props.expenseList.filter((e) => e.name.toLowerCase().includes(props.inputSearch.toLowerCase())) : props.expenseList;
    const expenseList = list.map((e) => 
      <li key={e.name.toLowerCase().replace(/\s/g, '-')}>
        <ExpenseItem name={e.name} cost={e.cost} />
      </li>);
    return (
        <div className="ExpenseList">
            <h2>Expenses</h2>
            <input type="text" name="inputSearch" id="inputSearch" placeholder="Type to search..." style={{ marginTop: ".75rem"}} value={props.inputSearch} onChange={props.searchExpense} />
            <ExpenseListUL>{expenseList}</ExpenseListUL>
        </div>
    );
}

export default ExpenseList;