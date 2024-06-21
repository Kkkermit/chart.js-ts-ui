import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Chart from "./chart";
import { store } from "../../../redux/vote.store";
import { expect, describe, it } from "vitest";

describe("Chart", () => {
	it("renders ChartTSData component", () => {
		render(
			<Provider store={store}>
				<Chart />
			</Provider>,
		);
		expect(screen.getByTestId("chart-ts-data")).toBeInTheDocument();
	});
});
