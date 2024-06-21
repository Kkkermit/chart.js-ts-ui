import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Header from "./header";
import { i18n } from "../../../i18n";

describe("Header", () => {
	beforeEach(() => {
		render(<Header />);
	});
	it("renders the header component", () => {
		render(<Header />);
	});

	it("renders the title", () => {
		const title = screen.getByText(i18n.t("header"));
		expect(title).toBeInTheDocument();
	});
});
