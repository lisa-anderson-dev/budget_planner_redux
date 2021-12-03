import React from 'react';
import './App.css';

import Dashboard from './components/Dashboard';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budgetMode: false,
      newBudget: "",
      budgetTotal: 2000,
      inputExpenseName: "",
      inputExpenseCost: "",
      inputSearch: "",
      searchMode: false,
      expenseList: [
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
      ]
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  switchBudgetMode = () => {
    this.setState({
      budgetMode: true,
      newBudget: this.state.budgetTotal
    })
  }

  saveNewBudget = () => {
    if (Number(this.state.newBudget) < 1) {
      alert("Budget must be at least $1")
    }
    else {
      this.setState({
        budgetTotal: Number(this.state.newBudget),
        newBudget: "",
        budgetMode: false
      })
    }
  }

  cancelNewBudget = () => {
    this.setState({
      newBudget: "",
      budgetMode: false
    })
  }

  searchExpense = (event) => {
    const mode = event.target.value ? true : false;
    this.setState({
      inputSearch: event.target.value,
      searchMode: mode
    });
  }

  deleteExpense = (e) => {
    const deleteConfirm = window.confirm("Are you sure you want to delete this expense?");
    if (deleteConfirm) {
      const name = e.target.parentElement.parentElement.previousElementSibling.innerHTML;
      const cost = Number(e.target.parentElement.previousElementSibling.innerHTML.slice(1));
      let idx = this.state.expenseList.findIndex((e) => e.name === name && e.cost === cost);
      this.state.expenseList.splice(idx, 1);
      this.setState({
        expenseList: this.state.expenseList
      });
    }
  }

  addExpense = () => {
    if (!this.state.inputExpenseName || this.state.inputExpenseCost === "")
      alert("Cannot add expense without a name and cost");
    else if (Number(this.state.inputExpenseCost) < 1)
      alert("Cost must be at least $1")
    else {
      const newExpense = {
        name: this.state.inputExpenseName,
        cost: Number(this.state.inputExpenseCost)
      };
      this.state.expenseList.push(newExpense);
      this.setState({
        expenseList: this.state.expenseList,
        inputExpenseName: "",
        inputExpenseCost: ""
      });
    }
  }

  render() {
    const budgetSpent = this.state.expenseList.reduce((sum, e) => sum += e.cost, 0);
    const budgetRemaining = this.state.budgetTotal - budgetSpent;
    return (
      <div className="App">

        <h1>My Budget Planner</h1>

        <Dashboard budgetMode={this.state.budgetMode} newBudget={this.state.newBudget} budgetTotal={this.state.budgetTotal} budgetRemaining={budgetRemaining} budgetSpent={budgetSpent} handleChange={this.handleChange} switchBudgetMode={this.switchBudgetMode} cancelNewBudget={this.cancelNewBudget} saveNewBudget={this.saveNewBudget} />

        <ExpenseList searchMode={this.state.searchMode} inputSearch={this.state.inputSearch} expenseList={this.state.expenseList} searchExpense={this.searchExpense} deleteExpense={this.deleteExpense} />

        <AddExpense inputExpenseName={this.state.inputExpenseName} inputExpenseCost={this.state.inputExpenseCost} handleChange={this.handleChange} addExpense={this.addExpense} />
        
      </div>
    );
  }
}

export default App;