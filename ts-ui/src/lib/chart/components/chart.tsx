import ChartTSData from "../chartData/chart.data";
import "../styles/chart.css";

function Chart() {
	return (
		<>
			<div className="chart-container" data-testid="chart-ts-data">
				<ChartTSData />
			</div>
		</>
	);
}

export default Chart;
