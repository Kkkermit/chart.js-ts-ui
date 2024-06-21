import i18n from "./i18n";
import { describe, it, expect } from "vitest";

describe("i18n", () => {
	it("should initialize with English language", () => {
		expect(i18n.language).toBe("en");
	});

	it("should be able to change language", async () => {
		await i18n.changeLanguage("es");
		expect(i18n.language).toBe("es");
	});
	it("should translate the header correctly", () => {
		i18n.changeLanguage("en");
		expect(i18n.t("headings.header")).toBe("TypeScript Project");
		i18n.changeLanguage("es");
		expect(i18n.t("headings.header")).toBe("Proyecto TypeScript");
	});

	it("should translate color names correctly", () => {
		i18n.changeLanguage("en");
		expect(i18n.t("chartData.colorNames.red")).toBe("Red");
		expect(i18n.t("chartData.colorNames.blue")).toBe("Blue");
		expect(i18n.t("chartData.colorNames.green")).toBe("Green");
		expect(i18n.t("chartData.colorNames.purple")).toBe("Purple");
		expect(i18n.t("chartData.colorNames.orange")).toBe("Orange");
		i18n.changeLanguage("es");
		expect(i18n.t("chartData.colorNames.red")).toBe("Rojo");
		expect(i18n.t("chartData.colorNames.blue")).toBe("Azul");
		expect(i18n.t("chartData.colorNames.green")).toBe("Verde");
		expect(i18n.t("chartData.colorNames.purple")).toBe("Morado");
		expect(i18n.t("chartData.colorNames.orange")).toBe("Naranja");
	});

	it("should translate chart interaction correctly", () => {
		i18n.changeLanguage("en");
		expect(i18n.t("chartOptions.interaction.nearest")).toBe("nearest");
		i18n.changeLanguage("es");
		expect(i18n.t("chartOptions.interaction.nearest")).toBe("más cercano");
	});

	it("should translate chart title correctly", () => {
		i18n.changeLanguage("en");
		expect(i18n.t("chartOptions.plugins.title.chartTitle")).toBe("Advanced Chart.js Bar Chart");
		i18n.changeLanguage("es");
		expect(i18n.t("chartOptions.plugins.title.chartTitle")).toBe("Gráfico de barras avanzado de Chart.js");
	});

	it("should translate the scales correctly", () => {
		i18n.changeLanguage("en");
		expect(i18n.t("chartOptions.scales.yAxes.yAxisLabel")).toBe("Votes");
		expect(i18n.t("chartOptions.scales.xAxes.xAxisLabel")).toBe("Colors");
		i18n.changeLanguage("es");
		expect(i18n.t("chartOptions.scales.yAxes.yAxisLabel")).toBe("Votos");
		expect(i18n.t("chartOptions.scales.xAxes.xAxisLabel")).toBe("Colores");
	});
});
