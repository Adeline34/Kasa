import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <div className="container-general">
        <Header />
        <div className="page404">
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
          <NavLink to="/">
            <p className="goHome">Retourner sur la page d&apos;accueil</p>
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
