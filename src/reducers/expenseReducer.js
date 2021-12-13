const initialState = [
    {
      name: "Shopping",
      cost: 50
    },
    {
      name: "Vacation",
      cost: 300
    },
    {
      name: "Transportation",
      cost: 70
    },
    {
      name: "Gas",
      cost: 400
    },
    {
      name: "Child Care",
      cost: 500
    }
  ];

const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, {name: action.name, cost: action.cost}];
        case 'DELETE':
            const idx = state.findIndex((e) => e.name === action.name && e.cost === action.cost);
            return [...state.slice(0, idx), ...state.slice(idx + 1)];
        default:
            return state;
    }
}

export default expenseReducer;