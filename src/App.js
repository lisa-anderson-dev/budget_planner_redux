import React from 'react';
import './App.css';

import Dashboard from './components/Dashboard';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AddExpense from './components/AddExpense';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editBudget: false,
      newBudget: "",
      budgetTotal: 2000,
      inputExpenseName: "",
      inputExpenseCost: "",
      inputSearch: "",
      searchMode: false,
      searchResults: [],
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
      editBudget: true,
      newBudget: this.state.budgetTotal
    })
  }

  saveNewBudget = () => {
    this.setState({
      budgetTotal: this.state.newBudget,
      newBudget: "",
      editBudget: false
    })
  }

  cancelNewBudget = () => {
    this.setState({
      newBudget: "",
      editBudget: false
    })
  }

  searchExpense = (event) => {
    if (event.target.value) {
      const searchResults = this.state.expenseList.filter((e) => e.name.toLowerCase().includes(event.target.value.toLowerCase()));
      this.setState({
        inputSearch: event.target.value,
        searchMode: true,
        searchResults: searchResults
      });
    }
    else {
      this.setState({
        inputSearch: event.target.value,
        searchMode: false,
        searchResults: ""
      });
    }
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
      if (this.state.searchMode) {
        const searchResults = this.state.expenseList.filter((e) => e.name.toLowerCase().includes(this.state.inputSearch.toLowerCase()));
        this.setState({
          searchResults: searchResults
        });
      }
    }
  }

  addExpense = () => {
    if (this.state.inputExpenseName && this.state.inputExpenseCost !== "") {
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
    else {
      alert("Cannot add expense without a name and cost");
    }
  }

  render() {
    const budgetSpent = this.state.expenseList.reduce((sum, e) => sum += e.cost, 0);
    const budgetRemaining = this.state.budgetTotal - budgetSpent;
    const list = this.state.searchMode ? this.state.searchResults : this.state.expenseList;
    const expenseList = list.map((e) => 
      <li key={e.name.toLowerCase().replace(/\s/g, '-')}>
        <ExpenseItem name={e.name} cost={e.cost} deleteExpense={this.deleteExpense} />
      </li>);
    return (
      <div className="App">
        <h1>My Budget Planner</h1>
        <Dashboard editBudget={this.state.editBudget} newBudget={this.state.newBudget} budgetTotal={this.state.budgetTotal} budgetRemaining={budgetRemaining} budgetSpent={budgetSpent} handleChange={this.handleChange} switchBudgetMode={this.switchBudgetMode} cancelNewBudget={this.cancelNewBudget} saveNewBudget={this.saveNewBudget} />
        <ExpenseList inputSearch={this.state.inputSearch} expenseList={expenseList} searchExpense={this.searchExpense} />
        <AddExpense inputExpenseName={this.state.inputExpenseName} inputExpenseCost={this.state.inputExpenseCost} handleChange={this.handleChange} addExpense={this.addExpense} />
      </div>
    );
  }
}

export default App;