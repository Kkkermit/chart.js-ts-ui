import Chart from "../lib/chart/components/chart";
import Header from "../lib/header/components/header";
import "../styles/landingPage.css";

function LandingPage() {
	return (
		<>
			<div className="landing-page-container" data-testid="landing-page-container">
				<div className="landing-page-inner-container">
					<div className="landing-page-header-container">
						<div className="landing-page-header">
							<Header />
						</div>
					</div>
					<div className="landing-page-chart-container">
						<section className="landing-page-chart-section">
							<Chart />
						</section>
					</div>
				</div>
			</div>
		</>
	);
}

export default LandingPage;
