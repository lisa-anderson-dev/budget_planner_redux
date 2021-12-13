export const addExpenseAction = (name, cost) => {
    return {
        type: 'ADD',
        name, 
        cost
    }
};

export const deleteExpenseAction = (name, cost) => {
    return {
        type: 'DELETE',
        name, 
        cost
    }
};

export const updateBudgetAction = (newBudget) => {
    return {
        type: 'UPDATE',
        newBudget
    }
};
