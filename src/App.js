import React from "react";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// import Counter from "./components/Counter/Counter"

const dummy_expenses = [
  { title: "Book", price: 100, date: new Date("2022-10-12") },
  { title: "Chocolate", price: 150, date: new Date("2022-10-22") },
  { title: "Pen", price: 200, date: new Date("2021-8-10") },
  { title: "Comb", price: 300, date: new Date("2019-7-17") },
  { title: "Bag", price: 500, date: new Date("2019-7-27") },
  { title: "Shampoo", price: 400, date: new Date("2019-8-17") },
];

const App = () => {
   const [expenses, setExpenses] = useState(dummy_expenses);

  const acceptExpense = (expense) => {
    // expenses.push(expense)
    setExpenses((prev) => {
      return [expense, ...prev];
    });
    //console.log(expenses);
  };

  return (
    <div>
       <NewExpense onAddExpense={acceptExpense} ></NewExpense> 
      {/* we pass a property to a component as it's attribute */}
      <Expenses expenses={expenses}></Expenses>
      {/* <Counter></Counter> */}
    </div>
  );
};

export default App;
