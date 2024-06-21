import { i18n } from "../../../i18n/index";
import "../styles/header.css";

function Header() {
	return (
		<>
			{" "}
			<div className="header-container">
				<header className="header">
					<h1 className="header-h">{i18n.t("headings.header")}</h1>
				</header>
			</div>
		</>
	);
}

export default Header;
