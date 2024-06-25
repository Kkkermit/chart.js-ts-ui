import { i18n } from "../../../i18n/index";
import { dataset } from "./dataset";

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
			...dataset,
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
