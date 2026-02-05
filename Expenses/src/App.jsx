import './App.css'
import Expenses from './components/Expenses/Expenses.jsx'
import NewExpense from "./components/NewExpense/NewExpense.jsx"
import { useState } from 'react'

function App() {
  const DUMMY_EXPENSES = 
  [
    {
      id : 'id1',
      date : new Date(2026, 0, 10),
      title : 'New Book',
      price : 25.99
    },
    {
      id : 'id2',
      date : new Date(2026, 0, 2),
      title : 'New jeans',
      price : 99.99
    },
    {
      id : 'id3',
      date : new Date(2025, 6, 22),
      title : 'ChatGPT subscription',
      price : 99.99
    },
    {
      id : 'id4',
      date : new Date(2025, 1, 2),
      title : 'Phone',
      price : 799.99
    }
  ]

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHanlder = (expense) => {
    console.log('app.jsx data')
    console.log(expense)
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div className='app'>
      <NewExpense onAddExpense={addExpenseHanlder}/>
      <Expenses dataMain={expenses}/>
    </div>
  )
}

export default App
