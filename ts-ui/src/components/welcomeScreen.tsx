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
		<div
			data-testid="welcome-screen"
			onClick={handleClick}
			className="welcome-screen"
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				backgroundColor: "rgba(0,0,0,0.7)",
				color: "white",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				zIndex: 1000,
			}}
		>
			<h1>{i18n.t("welcomeScreen.welcomeMessage")}</h1>
		</div>
	);
};

export default WelcomeScreen;
