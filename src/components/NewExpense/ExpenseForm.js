import React from 'react'
import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
    //let title = "";
  const [title, setTitle] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [price, setPrice] = useState("");
  const [isPriceValid, setIsPriceValid] = useState(true);
  const [date, setDate] = useState("");
  const [isDateValid, setIsDateValid] = useState(true);

  const titleChangeHandler = (event) => {
    //console.log(event.target.value);
    setTitle(event.target.value);
  };

  const priceChangeHandler = (event) => {
    //console.log(event.target.value);
    setPrice(event.target.value);
  };

  const dateChangeHandler = (event) => {
    //console.log(event.target.value);
    setDate(event.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      setIsTitleValid(false);
      return;
    }
    if(price.trim().length === 0) {
      setIsPriceValid(false);
      return;
    }
    if(date.trim().length === 0) {
      setIsDateValid(false);
      return;
    }
    const expense = {
      title,
      price,
      date: new Date(date),
    };

    props.onSaveExpenseData(expense);
    console.log(expense);

    //to empty the form
    // Two way binding - Reading value from a component and setting the same for it's value attribute is called as two way binding
    setDate("");
    setPrice("");
    setTitle("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        {/* condiional rendering */}
        {!isTitleValid && <p>Title is required</p>}
        <input
          type="text"
          onChange={titleChangeHandler}
          value={title}
          onFocus={() => {
            setIsTitleValid(true);
          }}
          className={isTitleValid ? "" : "invalid"}
        />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        {!isPriceValid && <p>Price is required</p>}
        <input 
          type="number"
          min="100"
          step="100"
          onChange={priceChangeHandler}
          value={price}
          onFocus={() => {
            setIsPriceValid(true);
          }}
         
        />
      </div>
      <div className="new-expense__control">
        {!isDateValid && <p>Date is not valid</p>}
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          onChange={dateChangeHandler}
          value={date}
          onFocus={() => {
            setIsDateValid(true);
          }}
          className={isDateValid ? "" : "invalid"}
        />
      </div>
    </div>
    <div className="new-expense__actions">
    <button type="button" onClick={props.onCancel}>Cancel</button>
      <button type="submit">Add Expense</button>
    </div>
  </form>
  )
}

export default ExpenseForm;