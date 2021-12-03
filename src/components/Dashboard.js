import React from 'react';

function Dashboard(props) {
    const displayBudget = 
        <div id="budgetTotal">
            Budget:&ensp;${props.budgetTotal}
            <button className="formBtn" onClick={props.switchBudgetMode}>Edit</button>
        </div>;
    const editBudget = 
        <div id="budgetTotal">
            <label htmlFor="newBudget">Budget:</label>
            <input type="number" name="newBudget" id="newBudget" value={props.newBudget} onChange={props.handleChange} />
            <button className="iconBtn" onClick={props.saveNewBudget}><i className="fas fa-check-circle"></i></button>
            <button className="iconBtn" onClick={props.cancelNewBudget}><i className='fas fa-times-circle'></i></button>
        </div>;
    return (
        <div className="Dashboard">
            {props.editBudget ? editBudget : displayBudget}
            {props.budgetRemaining > 0 ? <div id="budgetRemaining">Remaining:&ensp;${props.budgetRemaining}</div> : <div id="budgetRemaining">Remaining:&ensp;$<span className="negative">({Math.abs(props.budgetRemaining)})</span></div>}
            <div id="budgetSpent">Spent so far:&ensp;${props.budgetSpent}</div>
        </div>
    );
}

export default Dashboard;
