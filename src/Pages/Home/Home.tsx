import { Link } from "react-router";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>🏁 Kart algo!</h1>

      <Link to="/game">
        <button type="button">GO !</button>
      </Link>
      <Link to="/login">
        <button type="button">Inscris-toi ou Connecte-toi</button>
      </Link>
      <h2>
        Réponds correctement à 10 questions d’algorithmes le plus rapidement possible pour faire avancer ton kart vers la ligne d’arrivée ! <br />
        <br />
        Chaque bonne réponse fait avancer ton kart, plus tu réponds vite et juste, plus ton kart avance vite. <br />
        <br />
        Si tu te trompes, tu perds un peu de temps mais tu peux continuer à jouer.
      </h2>
    </div>
  );
}

export default Home;
