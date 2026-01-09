import { useState } from 'react'
import './App.css'
import ExpenseItem from './components/ExpenseItem'

function App() {
  const data = {
    date: new Date(2024, 10, 12),
    title: 'New book',
    price: 30.99
  };

  const expenses = [
    {
      date: new Date(2024, 10, 12),
      title: 'New book',
      price: 30.99
    },
    {
      date: new Date(2024, 9, 5),
      title: 'New jeans',
      price: 99.99
    },
  ];

  return (
    <div className="App">
      <ExpenseItem {...expenses[0]}/>
      <ExpenseItem {...expenses[1]}/>
    </div>
  )
}

export default App
