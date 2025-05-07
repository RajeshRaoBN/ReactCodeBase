import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return <p className="no-expenses">No expenses found.</p>;
  }

  return (
    <ul className="expense-list">
      {expenses.map(exp => (
        <ExpenseItem key={exp.id} expense={exp} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default ExpenseList;
