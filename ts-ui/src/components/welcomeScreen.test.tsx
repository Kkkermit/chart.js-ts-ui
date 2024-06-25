import { screen, render, fireEvent } from "@testing-library/react";
import WelcomeScreen from "./welcomeScreen";
import { describe, it, expect, beforeEach } from "vitest";
import { i18n } from "../i18n/index";

describe("WelcomeScreen", () => {
	beforeEach(() => {
		render(<WelcomeScreen />);
	});
	it("should render the welcome screen", () => {
		const welcomeScreen = screen.getByTestId("welcome-screen");
		expect(welcomeScreen).toBeInTheDocument();
	});

	it("renders welcome message", () => {
		expect(screen.getByText(i18n.t("welcomeScreen.welcomeMessage"))).toBeInTheDocument();
	});

	it("disappears after click", () => {
		fireEvent.click(screen.getByText(i18n.t("welcomeScreen.welcomeMessage")));
		expect(screen.queryByText(i18n.t("welcomeScreen.welcomeMessage"))).not.toBeInTheDocument();
	});
});
