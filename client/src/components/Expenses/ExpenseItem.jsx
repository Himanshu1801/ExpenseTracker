import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    const dateObj = new Date(props.date);

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={dateObj} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                <div className="expense-item__actions">
                    <button onClick={() => props.onEdit({ id: props.id, name: props.title, amount: props.amount, date: props.date })}>
                        Edit
                    </button>
                    <button onClick={() => props.onDelete(props.id)}>Delete</button>
                </div>
            </Card>
        </li>
    );
};

export default ExpenseItem;
