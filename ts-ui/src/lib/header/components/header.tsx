import config from "../config/header.config.json";
import "../styles/header.css";

function Header() {
	return (
		<>
			{" "}
			<div className="header-container">
				<header className="header">
					<h1 className="header-h">{config.header}</h1>
				</header>
			</div>
		</>
	);
}

export default Header;
