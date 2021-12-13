import expenseReducer from './expenseReducer';
import budgetReducer from './budgetReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    expenseList: expenseReducer,
    budgetTotal: budgetReducer
})

export default allReducers;