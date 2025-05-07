import './App.css'
import React, { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

function App() {
  const [expenses, setExpenses] = useState([])

  const addExpenses = (expenses) => {
    setExpenses(prev => [expenses, ...prev])
  }
  const deleteExpense = (id) => {
    setExpenses(prev => prev.filter(exp => exp.id !== id));
  };
  return (
    <>
      <div className='app'>
        <h1>Expense Tracker</h1>
        <ExpenseForm onAddExpense={addExpenses} />
        <ExpenseList expenses={expenses} onDelete={deleteExpense} />
      </div>
    </>
  )
}

export default App
