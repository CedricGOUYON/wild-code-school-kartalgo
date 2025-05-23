import { Link } from "react-router";
import "./About.css"

function About () {
  return (
    <div className="page-about">

<article>
     <img src="src/assets/kart-staff-1.webp" alt="équipe"/>
</article>
      <article className="noms-equipe">
<h2>EQUIPE = Team 6 </h2>
<p>Anne, Éric, Mohamed, Cédric
</p>
<br/>
<h2>DEFI:</h2>
<p>Créer un jeu ludique pour initier les enfants à la magie des algorithmes en s’amusant !"
</p>
</article>

    <Link to="/">
    <button className="case-retour" type="button">Home</button>
</Link>

    </div>
  );
}

export default About;