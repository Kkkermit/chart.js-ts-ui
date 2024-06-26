import { i18n } from "../../../i18n/index";

export const backgroundColor = [
	"rgba(255, 99, 132, 0.2)",
	"rgba(54, 162, 235, 0.2)",
	"rgba(255, 206, 86, 0.2)",
	"rgba(75, 192, 192, 0.2)",
	"rgba(153, 102, 255, 0.2)",
	"rgba(255, 159, 64, 0.2)",
];

export const borderColor = [
	"rgba(255, 99, 132, 1)",
	"rgba(54, 162, 235, 1)",
	"rgba(255, 206, 86, 1)",
	"rgba(75, 192, 192, 1)",
	"rgba(153, 102, 255, 1)",
	"rgba(255, 159, 64, 1)",
];

export const dataset = {
	labels: i18n.t("chartData.numVotes"),
	data: [12, 19, 3, 5, 2, 3],
	backgroundColor: [...backgroundColor],
	borderColor: [...borderColor],
	borderWidth: 3,
};
