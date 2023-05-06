import React, {useState} from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
function NewExpenses(props){
    const [bool, boolHandler] = useState("0");
    function expenseDataHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString(),
        }
        props.onSaveExpense(expenseData);
    }
    
    function clicked(){
        boolHandler("1");
    }
    function delClicked(){
        boolHandler("0");
    }
    let content = <button onClick = {clicked}>Add Expense</button>;
    if(bool === "1"){
        content = <ExpenseForm onExpenseData = {expenseDataHandler} onCancel = {delClicked}/>
    }
    return (
        <div className="new-expense">
            {content}
        </div>
    )
}
export default NewExpenses;