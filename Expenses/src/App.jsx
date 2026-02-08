import './App.css'
import Expenses from './components/Expenses/Expenses.jsx'
import NewExpense from "./components/NewExpense/NewExpense.jsx"
import { useEffect, useState } from 'react'

function App() {
  const [expenses, setExpenses] = useState(() => {
    const expensesFromLS = JSON.parse(localStorage.getItem('expenses'))
    return expensesFromLS || []
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses])

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
