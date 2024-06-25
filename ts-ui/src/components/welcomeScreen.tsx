import React, { useState, MouseEvent } from "react";
import { i18n } from "../i18n/index";
import "../styles/welcomeScreen.css";

const WelcomeScreen: React.FC = () => {
	const [isVisible, setIsVisible] = useState(true);

	const handleClick = (_event: MouseEvent<HTMLDivElement>) => {
		setIsVisible(false);
	};

	if (!isVisible) {
		return null;
	}

	return (
		<div data-testid="welcome-screen" onClick={handleClick} className="welcome-screen">
			<h1>{i18n.t("welcomeScreen.welcomeMessage")}</h1>
		</div>
	);
};

export default WelcomeScreen;
