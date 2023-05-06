import React , {useState} from "react"
import ExpenseChart from "./ExpenseChart"
import ExpenseList from "./ExpenseList"
import Card from "../UI/Card";
import "./Expense.css"
import ExpenseFilter from "./ExpenseFilter";
function Expenses(props){
    const [enteredYear, setEnteredYear] = useState("2020");
    function filterChangeHandler(selectedYear){
        setEnteredYear(selectedYear);
    };
    const isYear = props.arr.filter((year) => {
        return year.date.getFullYear().toString() === enteredYear;
    });
    
    return(
        <div>
        <Card className = "expenses">
        <ExpenseFilter selected = {enteredYear} onChangeFilter = {filterChangeHandler}/>
        <ExpenseChart arr = {isYear}/>
        <ExpenseList item = {isYear}/>       
        </Card>
        </div>
    );
}
export default Expenses;