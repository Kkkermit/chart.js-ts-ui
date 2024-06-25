import { useEffect, useRef } from "react";
import { Chart as ChartJS, ChartData, ChartOptions, registerables } from "chart.js";
import { dataChartData, dataChartOptions } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { setChartType, setVotes } from "../../../redux/slice/vote.slice";
import { RootState } from "../../../redux/store/vote.store";
import { i18n } from "../../../i18n/index";

import "../styles/chart.css";

ChartJS.register(...registerables);

function ChartTSData() {
	const chartRef = useRef<HTMLCanvasElement>(null);
	const chartInstanceRef = useRef<ChartJS | null>(null);

	const dispatch = useDispatch();

	const votes = useSelector((state: RootState) => state.votes.votes);
	const chartType = useSelector((state: RootState) => state.votes.chartType);

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

			let options: ChartOptions = {
				...dataChartOptions,
				responsive: true,
				maintainAspectRatio: false,
			};

			if (chartType === "bar" || chartType === "line") {
				options = {
					...options,
					scales: {
						y: {
							beginAtZero: true,
							ticks: {
								max: Math.max(...votes) + 5,
							},
						},
					},
				};
			}

			if (chartInstanceRef.current) {
				chartInstanceRef.current.destroy();
			}

			chartInstanceRef.current = new ChartJS(ctx, {
				type: chartType,
				data: data,
				options: options,
			});
		}
	}, [votes, chartType]);

	return (
		<div className="chart-data-container">
			<select value={chartType} onChange={(e) => dispatch(setChartType(e.target.value as "pie" | "bar" | "line"))}>
				<option value="pie">{i18n.t("chartType.pie")}</option>
				<option value="bar">{i18n.t("chartType.bar")}</option>
				<option value="line">{i18n.t("chartType.line")}</option>
			</select>
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
