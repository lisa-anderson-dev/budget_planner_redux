import React from 'react';
import styled from "styled-components";

const DashboardDiv = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-gap: 1rem;

    div {
        padding: 0 1.25rem;
        display: flex;
        align-items: center;
        height: 4.5em;
    }
      
    #budgetRemaining {
        background-color: #d5eddb;
    }
      
    #budgetSpent {
        background-color: #cbe5ff;
    }

    .negative {
        color: #ea1f25;
    }

    @media screen and (min-width: 575px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const BudgetTotalDiv = styled.div`
    background-color: #e1e3e4;
    justify-content: space-between;
    column-gap: .5rem;

    input {
        background-color: #fff;
    }
      
    .fas {
        margin-top: .4rem;
    }
      
    .fa-check-circle {
        color: #43af49;
    }
      
    .fa-times-circle {
        color: #ea1f25;
    }
`;

function Dashboard(props) {
    const displayBudget = 
        <BudgetTotalDiv>
            Budget:&ensp;${props.budgetTotal}
            <button className="formBtn" onClick={props.switchBudgetMode}>Edit</button>
        </BudgetTotalDiv>;
    const editBudget = 
        <BudgetTotalDiv>
            <label htmlFor="newBudget">Budget:</label>
            <input type="number" name="newBudget" id="newBudget" min="1" value={props.newBudget} onChange={props.handleChange} />
            <button className="iconBtn" onClick={props.saveNewBudget}><i className="fas fa-check-circle"></i></button>
            <button className="iconBtn" onClick={props.cancelNewBudget}><i className='fas fa-times-circle'></i></button>
        </BudgetTotalDiv>;
    return (
        <DashboardDiv>
            {props.budgetMode ? editBudget : displayBudget}
            {props.budgetRemaining > 0 ? <div id="budgetRemaining">Remaining:&ensp;${props.budgetRemaining}</div> : <div id="budgetRemaining">Remaining:&ensp;$<span className="negative">({Math.abs(props.budgetRemaining)})</span></div>}
            <div id="budgetSpent">Spent so far:&ensp;${props.budgetSpent}</div>
        </DashboardDiv>
    );
}

export default Dashboard;
