import "./ExpenseList.css"
import ExpenseItem from "./ExpenseItem"
function ExpenseList(props){
    if(props.item.length === 0){
        return (
            <h2 className = "expenses-list__fallback">No expense found!</h2>
        )
    }
    return (
        <ul className = "expenses-list">
            {props.item.map((ex) => (
            <ExpenseItem key = {ex.id} title = {ex.title} amount = {ex.amount} date = {ex.date} />
        ))};
        </ul>
    )
}
export default ExpenseList;