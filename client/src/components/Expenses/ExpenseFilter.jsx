import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2018 }, (_, i) => currentYear - i);

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;