import React from 'react';
import styled from "styled-components";

const AddExpenseUL = styled.ul`
    margin: .75rem 0 1rem;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;

    @media screen and (min-width: 575px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;


function AddExpense(props) {
    return (
        <div className="AddExpense">
            <h2>Add Expense</h2>
            <AddExpenseUL>
              <li>
                  <label htmlFor="inputExpenseName">Name</label>
                  <input type="text" name="inputExpenseName" id="inputExpenseName" value={props.inputExpenseName} onChange={props.handleChange} />
              </li>
              <li>
                  <label htmlFor="inputExpenseCost">Cost</label>
                  <input type="number" name="inputExpenseCost" id="inputExpenseCost" min="1" value={props.inputExpenseCost} onChange={props.handleChange} />
              </li>
            </AddExpenseUL>
            <button className="formBtn" onClick={props.addExpense}>Save</button>
        </div>
    );
}

export default AddExpense;