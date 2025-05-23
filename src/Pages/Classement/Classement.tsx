import { Link } from "react-router";
import "./Classement.css";

function Classement() {
	const allScore = JSON.parse(localStorage.getItem("allScore") || "[]");
	allScore.sort(
		(a: { score: number }, b: { score: number }) => a.score - b.score,
	);

	return (
		<div className="podium">
			<div className="classement-box">
				<h2>🏁 Classement</h2>

				<div className="classement-list">
					{allScore.map(
						(user: { name: string; score: number }, index: number) => (
							<div key={index} className="classement-item">
								{index + 1} : {user.name} : {user.score} secondes
							</div>
						),
					)}
				</div>

				<Link to="/">
					<button type="button" className="go-button">
						Accueil
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Classement;
