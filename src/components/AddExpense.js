import React from 'react';

function AddExpense(props) {
    return (
        <div className="AddExpense">
            <h2>Add Expense</h2>
            <ul>
              <li>
                  <label htmlFor="inputExpenseName">Name</label>
                  <input type="text" name="inputExpenseName" id="inputExpenseName" value={props.inputExpenseName} onChange={props.handleChange} />
              </li>
              <li>
                  <label htmlFor="inputExpenseCost">Cost</label>
                  <input type="number" name="inputExpenseCost" id="inputExpenseCost" min="1" value={props.inputExpenseCost} onChange={props.handleChange} />
              </li>
            </ul>
            <button className="formBtn" onClick={props.addExpense}>Save</button>
        </div>
    );
}

export default AddExpense;