import React from 'react';

function ExpenseItem(props) {
    return (
        <div className="ExpenseItem">
            <div>{props.name}</div>
            <div>
                <div className="expenseCost">${props.cost}</div>
                <button className="iconBtn" onClick={props.deleteExpense}><i className='fas fa-times-circle'></i></button></div>
        </div>
    );
}

export default ExpenseItem;