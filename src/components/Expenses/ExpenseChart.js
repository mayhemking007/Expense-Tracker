import Charts from "../Charts/Charts"
function ExpenseChart(props){
    const chartDataPoints = [
        {label : "Jan", value : 0},
        {label : "Feb", value : 0},
        {label : "Mar", value : 0},
        {label : "Apr", value : 0},
        {label : "May", value : 0},
        {label : "Jun", value : 0},
        {label : "Jul", value : 0},
        {label : "Aug", value : 0},
        {label : "Sep", value : 0},
        {label : "Oct", value : 0},
        {label : "Nov", value : 0},
        {label : "Dec", value : 0},
    ];
    for(let i = 0; i < props.arr.length; i++){
        const expMonth = props.arr[i].date.getMonth();
        chartDataPoints[expMonth].value += props.arr[i].amount;
    }
    return (
        <Charts dataPoints = {chartDataPoints}/>
    )
}
export default ExpenseChart;