import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import LandingPage from "./landingPage";

describe("landing page", () => {
	beforeEach(() => {
		render(<LandingPage />);
	});
	it("should render the landing page", () => {
		const { container } = render(<LandingPage />);
		const landingPageContainer = container.querySelector(".landing-page-container");
		expect(landingPageContainer).toBeInTheDocument();
	});

	it("should render the title", () => {
		const title = screen.getByText("TypeScript Project");
		expect(title).toBeInTheDocument();
	});
});
