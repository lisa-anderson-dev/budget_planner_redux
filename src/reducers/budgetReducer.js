const budgetReducer = (state = 2000, action) => {
    switch (action.type) {
        case 'UPDATE':
            return action.newBudget;
        default:
            return state;
    }
}

export default budgetReducer;