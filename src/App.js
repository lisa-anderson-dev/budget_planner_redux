import React from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "add",
      budgetTotal: 2000,
      inputExpenseName: "",
      inputExpenseCost: "",
      inputSearch: "",
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

  searchExpense = () => {
    return;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addExpense = () => {
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

  render() {
    const budgetSpent = this.state.expenseList.reduce((sum, e) => sum += e.cost, 0);
    const budgetRemaining = this.state.budgetTotal - budgetSpent;
    const expenseList = this.state.expenseList.map((e) => <li key={e.name.toLowerCase().replace(/\s/g, '-')}><ExpenseItem name={e.name} cost={e.cost} /></li>);
    return (
      <div className="App">
        <h1>My Budget Planner</h1>
        <div className="Dashboard">
            <div id="budgetTotal">Budget: ${this.state.budgetTotal}
                <button>Edit</button>
            </div>
            <div id="budgetRemaining">Remaining: ${budgetRemaining}</div>
            <div id="budgetSpent">Spent so far: ${budgetSpent}</div>
        </div>
        <div className="ExpenseList">
          <h2>Expenses</h2>
          <input type="text" name="inputSearch" id="inputSearch" placeholder="Type to search..." value={this.state.inputSearch} onChange={this.searchExpense} />
          <ul>{expenseList}</ul>
        </div>
        <div className="AddExpense">
            <h2>Add Expense</h2>
            <ul>
              <li>
                  <label htmlFor="inputExpenseName">Name</label>
                  <input type="text" name="inputExpenseName" id="inputExpenseName" value={this.state.inputExpenseName} onChange={this.handleChange} />
              </li>
              <li>
                  <label htmlFor="inputExpenseCost">Cost</label>
                  <input type="number" name="inputExpenseCost" id="inputExpenseCost" value={this.state.inputExpenseCost} onChange={this.handleChange} />
              </li>
            </ul>
            <button onClick={this.addExpense}>Save</button>

        </div>
      </div>
    );
  }
}

export default App;