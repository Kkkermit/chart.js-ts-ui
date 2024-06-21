import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Header from "./header";

describe("Header", () => {
	beforeEach(() => {
		render(<Header />);
	});
	it("renders the header component", () => {
		render(<Header />);
	});

	it("renders the title", () => {
		const title = screen.getByText("Tic Tac Toe");
		expect(title).toBeInTheDocument();
	});
});
