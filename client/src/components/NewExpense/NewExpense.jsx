import React, { useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (props.editingExpense) {
            setIsEditing(true);
        }
    }, [props.editingExpense]);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        if (props.editingExpense) {
            props.onEditExpense(props.editingExpense.id, enteredExpenseData);
        } else {
            props.onAddExpense(enteredExpenseData);
        }
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };
    const stopEditingHandler = () => {
        setIsEditing(false);
        props.onCancelEdit();
    };

    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                    editingExpense={props.editingExpense}
                />
            )}
        </div>
    );
};

export default NewExpense;