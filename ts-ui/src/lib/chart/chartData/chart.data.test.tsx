import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import voteReducer from "../../../redux/vote.slice";
import ChartTSData from "./chart.data.tsx";
import { describe, it, expect, beforeEach } from "vitest";

describe("ChartTSData", () => {
	const store = configureStore({ reducer: { votes: voteReducer } });

	beforeEach(() => {
		render(
			<Provider store={store}>
				<ChartTSData />
			</Provider>,
		);
	});

	it("should render the chart data component", () => {
		const chartComponents = screen.getByTestId("chart");
		expect(chartComponents).toBeInTheDocument();
	});

	it("should render and response to the input tags", () => {
		const voteInputs = screen.getAllByRole("spinbutton");
		expect(voteInputs).toHaveLength(6);
		fireEvent.change(voteInputs[0], { target: { value: "5" } });
		expect(store.getState().votes.votes[0]).toBe(5);
	});

	it("should get the color names text", () => {
		const { container } = render(
			<Provider store={store}>
				<ChartTSData />
			</Provider>,
		);
		const colorNames = container.querySelector("label");
		expect(colorNames).toBeInTheDocument();
	});
});
