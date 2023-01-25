import React from 'react'
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const filterChangeHandler = (e) =>{
       // props.filterChangeHandler(event.target.value);
       const year = e.target.value;

       props.filterChangeHandler(year);
    };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
    <select value={props.selected} onChange={filterChangeHandler}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
    </select>
    </div>
    </div>
  );
};

export default ExpenseFilter