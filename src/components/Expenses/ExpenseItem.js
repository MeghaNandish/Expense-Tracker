// import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';
import Card from  '../UI/Card';

//props - It's an object that contain component related data 
const ExpenseItem = (props) => {
  const title = props.expenses.title;
  const price = props.expenses.price;
  const date = props.expenses.date;

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${price}</div>
        </div>
      </Card>
    </li>
  )
  // let title = "Football";
 // let date = "08 10 2022";
 // let price = "224";
 
 // state - a value that changes in future which will require a related JSX to be returned from component function

  //     const [title, setTitle] = useState ("Football");
  //     const [date, setDate] = useState ("08 10 2022");

  //     const changeTitleHandler = () =>{
  //         setTitle("Cricket ball");
  //  }

  //  const changeDateHandler = () =>{
  //     setDate("23 10 1998");
  // }

  // return (
  //   // <div className="expense-item">
  //   //   <div className="date">{props.date}</div>
  //   //   <div className="title">{props.title}</div>
  //   //   <div className="price">{props.price}</div>
  //     {/* <button onClick={changeTitleHandler}>Change Title</button> */}
  //     {/* <button onClick={changeDateHandler}>Change Date</button>  */}
  //   // </div>
  // );

  
};

export default ExpenseItem;
