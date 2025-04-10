import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
    if (!props.items || props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    title={expense.name}
                    amount={expense.amount}
                    date={expense.date}
                    onDelete={props.onDelete}
                    onEdit={props.onEdit}
                />
            ))}
        </ul>
    );
};

export default ExpensesList;
