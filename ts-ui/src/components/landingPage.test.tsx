import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import LandingPage from "./landingPage";
import { store } from "../redux/vote.store";
import { resetStore } from "../redux/action.redux"; // import the resetStore action creator

describe("landing page", () => {
	beforeEach(() => {
		render(
			<Provider store={store}>
				<LandingPage />
			</Provider>,
		);
	});

	afterEach(() => {
		store.dispatch(resetStore());
	});

	it("should render the landing page", () => {
		const landingPageContainer = screen.getByTestId("landing-page-container");
		expect(landingPageContainer).toBeInTheDocument();
	});

	it("should render the title", () => {
		const title = screen.getByText("TypeScript Project");
		expect(title).toBeInTheDocument();
	});
});
