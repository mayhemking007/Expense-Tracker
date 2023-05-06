import React, {useState} from "react"
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
const DUMMY_EXPENSES = [
  {
    id : "e1",
    title : "Car Insurance",
    amount : 294,
    date : new Date(2021, 2, 28),
  },
  {
    id : "e2",
    title : "Toilet Paper",
    amount : 50,
    date : new Date(2021, 2, 28),
  },
  {
    id : "e3",
    title : "Food",
    amount : 330,
    date : new Date(2021, 2, 28),
  },
];
function App() {
  const [expenses, setExpense] = useState(DUMMY_EXPENSES);
  function SaveExpense(expense){
    setExpense((prevExp) => {
      return [expense, ...prevExp];
  });
  }
  return (
    <div>
      <NewExpenses onSaveExpense = {SaveExpense}/>
      <Expenses arr = {expenses} />
    </div>
  );
}

export default App;
