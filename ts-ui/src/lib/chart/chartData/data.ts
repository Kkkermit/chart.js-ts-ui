import { i18n } from "../../../i18n/index";

export const dataChartData = {
	labels: [
		i18n.t("chartData.colorNames.red"),
		i18n.t("chartData.colorNames.blue"),
		i18n.t("chartData.colorNames.yellow"),
		i18n.t("chartData.colorNames.green"),
		i18n.t("chartData.colorNames.purple"),
		i18n.t("chartData.colorNames.orange"),
	],
	datasets: [
		{
			label: i18n.t("chartData.numVotes"),
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(255, 206, 86, 0.2)",
				"rgba(75, 192, 192, 0.2)",
				"rgba(153, 102, 255, 0.2)",
				"rgba(255, 159, 64, 0.2)",
			],
			borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(75, 192, 192, 1)",
				"rgba(153, 102, 255, 1)",
				"rgba(255, 159, 64, 1)",
			],
			borderWidth: 3,
		},
	],
};

export const dataChartOptions = {
	responsive: true,
	maintainAspectRatio: false,
	interaction: {
		mode: i18n.t("chartOptions.interaction.nearest"),
		axis: "x",
		intersect: false,
	},
	plugins: {
		legend: {
			display: true,
			position: "top",
		},
		title: {
			display: true,
			text: i18n.t("chartOptions.plugins.title.chartTitle"),
		},
		tooltip: {
			enabled: true,
			backgroundColor: "rgba(0, 0, 0, 0.7)",
			titleFont: { size: 16, weight: "bold" },
			bodyFont: { size: 14 },
		},
	},
	scales: {
		x: {
			display: true,
			title: {
				display: true,
				text: i18n.t("chartOptions.scales.xAxes.xAxisLabel"),
			},
		},
		y: {
			display: true,
			title: {
				display: true,
				text: i18n.t("chartOptions.scales.yAxes.yAxisLabel"),
			},
		},
	},
};
