import React, {useState, createContext} from 'react';
import './App.css';

import Dashboard from './components/Dashboard';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';

import styled from "styled-components";

import {useSelector, useDispatch} from 'react-redux';
import {addExpenseAction, deleteExpenseAction, updateBudgetAction} from './actions';

const AppDiv = styled.div`
  width: 100%;
  margin: auto;

  > * {
    margin: 1.5rem 1rem;
  }

  @media screen and (min-width: 575px) {
    max-width: 800px;
  }
`;

const UserContext = createContext();

function App() {
  // Redux-managed states
  const expenseList = useSelector(state => state.expenseList);
  const budgetTotal = useSelector(state => state.budgetTotal);
  const dispatch = useDispatch();

  // React-managed states
  const [budgetMode, setBudgetMode] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [searchMode, setSearchMode] = useState(false);
  const [formField, setFormField] = useState({
    newBudget: budgetTotal,
    inputExpenseName: "",
    inputExpenseCost: ""
  });

  const handleChange = (event) => {
    setFormField(previousState => {
      return {
        ...previousState,
        [event.target.name]: event.target.value
      }
    });
  }

  const switchBudgetMode = () => {
    setBudgetMode(true);
  }
  
  const saveNewBudget = () => {
    if (Number(formField.newBudget) < 1) {
      alert("Budget must be at least $1")
    }
    else {
      dispatch(updateBudgetAction(formField.newBudget));
      setBudgetMode(false);
    }
  }
  
  const cancelNewBudget = () => {
    setFormField(previousState => {
      return {
        ...previousState,
        newBudget: budgetTotal
      }
    });
    setBudgetMode(false);
  }
  
  const searchExpense = (event) => {
    const mode = event.target.value ? true : false;
    setInputSearch(event.target.value);
    setSearchMode(mode);
  }
  
  const deleteExpense = (e) => {
    const deleteConfirm = window.confirm("Are you sure you want to delete this expense?");
    if (deleteConfirm) {
      const name = e.target.parentElement.parentElement.previousElementSibling.innerHTML;
      const cost = Number(e.target.parentElement.previousElementSibling.innerHTML.slice(1));
      dispatch(deleteExpenseAction(name, cost));
    }
  }

  const addExpense = () => {
    if (!formField.inputExpenseName || formField.inputExpenseCost === "")
      alert("Cannot add expense without a name and cost");
    else if (Number(formField.inputExpenseCost) < 1)
      alert("Cost must be at least $1")
    else {
      const name = formField.inputExpenseName;
      const cost = Number(formField.inputExpenseCost);
      dispatch(addExpenseAction(name, cost))
      setFormField(previousState => {
        return {
          ...previousState,
          inputExpenseName: "",
          inputExpenseCost: ""
        }
      });
    }
  }
  const budgetSpent = expenseList.reduce((sum, e) => sum += e.cost, 0);
  const budgetRemaining = budgetTotal - budgetSpent;
  return (
    <AppDiv>
      <h1>My Budget Planner</h1>

      <Dashboard budgetMode={budgetMode} newBudget={formField.newBudget} budgetTotal={budgetTotal} budgetRemaining={budgetRemaining} budgetSpent={budgetSpent} handleChange={handleChange} switchBudgetMode={switchBudgetMode} cancelNewBudget={cancelNewBudget} saveNewBudget={saveNewBudget} />

      <UserContext.Provider value={deleteExpense}>
      <ExpenseList searchMode={searchMode} inputSearch={inputSearch} expenseList={expenseList} searchExpense={searchExpense} />
      </UserContext.Provider>

      <AddExpense inputExpenseName={formField.inputExpenseName} inputExpenseCost={formField.inputExpenseCost} handleChange={handleChange} addExpense={addExpense} />
      
    </AppDiv>
  );
}

export default App;
export {UserContext};