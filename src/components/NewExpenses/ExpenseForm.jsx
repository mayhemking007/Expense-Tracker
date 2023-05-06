import React, {useState} from "react";
import "./ExpenseForm.css";
function ExpenseForm(props){
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    function titlechangeHandler(event){
        setEnteredTitle(event.target.value);
    }
    function amountchangeHandler(event){
        setEnteredAmount(event.target.value);
    }
    function datechangeHandler(event){
        setEnteredDate(event.target.value);
    }
    function submitHandler(event){
        event.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        };
        props.onExpenseData(expenseData);
        props.onCancel("0");
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    
    }
    
    
return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type = "text" onChange = {titlechangeHandler} value = {enteredTitle}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type = "number" min = "0.01" step = "0.01" onChange={amountchangeHandler} value = {enteredAmount}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type = "Date" onChange={datechangeHandler} value = {enteredDate}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type = "button" onClick = {props.onCancel}>Cancel</button>
            <button type = "submit">Add Expense</button>
        </div>
    </form>
)
}
export default ExpenseForm;