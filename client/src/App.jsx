import React, { useEffect, useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch("https://expensetracker-2exb.onrender.com/expenses");
        if (!response.ok) {
          throw new Error("Failed to fetch expenses.");
        }
        const data = await response.json();
        setExpenses(data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, []);

  const addExpenseHandler = async (expense) => {
    try {
      const response = await fetch("https://expensetracker-2exb.onrender.com/expenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(expense),
      });

      if (!response.ok) {
        throw new Error("Failed to add expense.");
      }

      const newExpense = await response.json();
      setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  const onEditHandler = async (id, updatedExpense) => {
    try {
      const response = await fetch(`https://expensetracker-2exb.onrender.com/expenses/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedExpense),
      });

      if (!response.ok) {
        throw new Error("Failed to update expense.");
      }

      const editedExpense = await response.json();
      setExpenses((prevExpenses) =>
        prevExpenses.map((expense) =>
          expense.id === id ? editedExpense : expense
        )
      );
      setEditingExpense(null);
    } catch (error) {
      console.error("Error updating expense:", error);
    }
  };

  const startEditingHandler = (expense) => {
    setEditingExpense(expense);
  };

  const onDeleteHandler = async (id) => {
    try {
      const response = await fetch(`https://expensetracker-2exb.onrender.com/expenses/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete expense.");
      }

      setExpenses((prevExpenses) =>
        prevExpenses.filter((expense) => expense.id !== id)
      );
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  return (
    <div>
      <NewExpense
        onAddExpense={addExpenseHandler}
        onEditExpense={onEditHandler}
        editingExpense={editingExpense}
        onCancelEdit={() => setEditingExpense(null)}
      />
      <Expenses items={expenses} onEdit={startEditingHandler} onDelete={onDeleteHandler} />
    </div>
  );
}

export default App;