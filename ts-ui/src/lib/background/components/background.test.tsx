import { render } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Background from "./background";

describe("Background", () => {
	beforeEach(() => {
		render(<Background />);
	});
	it("renders the background component", () => {
		render(<Background />);
	});

	it("renders the background", () => {
		const { container } = render(<Background />);
		const background = container.querySelector(".background");
		expect(background).toBeInTheDocument();
	});
});
