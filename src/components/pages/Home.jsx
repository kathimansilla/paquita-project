//Images
import { Link } from "react-router-dom";

//React
import landing from "../../assets/images/landing-ps.png";

function Home() {
  return (
    <main className="homeMain">
      <h1 className="homeMain__title">¿Qué personaje de Paquita Salas eres?</h1>
      <img className="homeMain__img" src={landing} alt="" />
      <p className="homeMain__text">Bienvenida a PS Management...</p>
      <button className="homeMain__btn">
        <Link to="/quiz">Comenzar el test</Link>
      </button>
    </main>
  );
}

export default Home;
