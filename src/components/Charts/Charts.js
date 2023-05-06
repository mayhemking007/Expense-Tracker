import Chartbar from "./Chartbar";
import "./Charts.css";
function Charts(props){
    const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointsValue)
    return (<div className = "chart">
    {props.dataPoints.map((dataPoint) => (
        <Chartbar key = {dataPoint.label} value = {dataPoint.value} maxVal = {totalMax} label = {dataPoint.label}/> 
    ))}
    </div>);    
}
export default Charts;