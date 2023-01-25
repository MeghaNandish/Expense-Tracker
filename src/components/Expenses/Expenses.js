import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";          
import { useState } from "react";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2021);

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
   // console.log(expense.date.getFullYear());
    return expense.date.getFullYear() === +filteredYear;
  });

 // console.log(filteredExpenses);
  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter selected={filteredYear} filterChangeHandler={filterChangeHandler}></ExpenseFilter>
      {/* <ExpenseItem
        date={props.expenses[0].date}
        title={props.expenses[0].title}
        price={props.expenses[0].price}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expenses[1].date}
        title={props.expenses[1].title}
        price={props.expenses[1].price}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expenses[2].date}
        title={props.expenses[2].title}
        price={props.expenses[2].price}
      ></ExpenseItem>  */}

      {/* condiional rendering */}
      <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
      {!filteredExpenses.length && <h2>no expenses found</h2>}
      {filteredExpenses.length >0 &&
        filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              expenses={expense}
              key={Math.random() * 10000}
            ></ExpenseItem>
          );
        })}
        </Card>
    </div>
  );
};

export default Expenses;
