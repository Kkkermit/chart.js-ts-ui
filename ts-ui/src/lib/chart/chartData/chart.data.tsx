import { useEffect, useRef } from "react";
import { Chart as ChartJS, ChartData, ChartOptions, registerables } from "chart.js";
import { dataChartData, dataChartOptions } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { setVotes } from "../../../redux/vote.slice";
import { RootState } from "../../../redux/vote.store";

import "../styles/chart.css";

ChartJS.register(...registerables);

function ChartTSData() {
	const chartRef = useRef<HTMLCanvasElement>(null);
	const chartInstanceRef = useRef<ChartJS | null>(null);

	const dispatch = useDispatch();

	const votes = useSelector((state: RootState) => state.votes.votes);

	useEffect(() => {
		if (chartRef && chartRef.current) {
			const ctx = chartRef.current.getContext("2d");

			const data: ChartData = {
				...dataChartData,
				datasets: [
					{
						...dataChartData.datasets[0],
						data: votes,
					},
				],
			};

			const options: ChartOptions = dataChartOptions;

			if (chartInstanceRef.current) {
				chartInstanceRef.current.destroy();
			}

			chartInstanceRef.current = new ChartJS(ctx, {
				type: "bar",
				data: data,
				options: options,
			});
		}
	}, [votes]);

	return (
		<div className="chart-data-container">
			<canvas className="chart-data-canvas" ref={chartRef} data-testid="chart" />
			{dataChartData.labels.map((label, index) => (
				<div key={label}>
					<label>{label}</label>
					<input
						type="number"
						value={votes[index]}
						onChange={(e) => {
							const newVotes = [...votes];
							newVotes[index] = Number(e.target.value);
							dispatch(setVotes(newVotes));
						}}
					/>
				</div>
			))}
		</div>
	);
}

export default ChartTSData;
