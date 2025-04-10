import React, { useState, useEffect } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredName, setEnteredName] = useState(props.editingExpense?.name || "");
    const [enteredAmount, setEnteredAmount] = useState(props.editingExpense?.amount || "");
    const [enteredDate, setEnteredDate] = useState(props.editingExpense?.date || "");

    useEffect(() => {
        if (props.editingExpense) {
            setEnteredName(props.editingExpense.name);
            setEnteredAmount(props.editingExpense.amount);
            setEnteredDate(props.editingExpense.date);
        }
    }, [props.editingExpense]);

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            name: enteredName,
            amount: parseFloat(enteredAmount),
            date: enteredDate,
        };

        props.onSaveExpenseData(expenseData);

        setEnteredName("");
        setEnteredAmount("");
        setEnteredDate("");
    };
    const today = new Date().toISOString().split("T")[0];

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Name</label>
                    <input
                        type="text"
                        value={enteredName}
                        onChange={(e) => setEnteredName(e.target.value)}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={(e) => setEnteredAmount(e.target.value)}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max={today}
                        value={enteredDate}
                        onChange={(e) => setEnteredDate(e.target.value)}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button type="submit">
                    {props.editingExpense ? "Update Expense" : "Add Expense"}
                </button>
            </div>
        </form>
    );
};

export default ExpenseForm;
