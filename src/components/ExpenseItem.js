import React, {useContext} from 'react';
import {UserContext} from './../App';
import styled from "styled-components";

const ExpenseItemDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
        display: flex;
        column-gap: 1.25rem;
    }
`;

const ExpenseCost = styled.div`
    background-color: #007dfe;
    color: #fff;
    height: 1.5em;
    font-size: small;
    position: relative;
    display:flex;
    align-items: center;

    &::before, &::after {
        content: "";
        background-color: #007dfe;
        border-radius: 50%;
        position: absolute;
        height: 1.5em;
        width: 1.5em;
        z-index: -1;
    }

    &::before {
        left: -.75em;
    }
      
    &::after {
        right: -.75em;
    }
`;

function ExpenseItem(props) {
    const deleteExpense = useContext(UserContext);
    return (
        <ExpenseItemDiv>
            <div>{props.name}</div>
            <div>
                <ExpenseCost>${props.cost}{deleteExpense}</ExpenseCost>
                <button className="iconBtn" onClick={deleteExpense}><i className='fas fa-times-circle'></i></button></div>
        </ExpenseItemDiv>
    );
}

export default ExpenseItem;