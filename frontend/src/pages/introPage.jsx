import { Link } from "react-router-dom";
import logoIntro from "../assets/logo-intro.png";
import "../styles/pages/introPage.css";

function IntroPage() {
  return (
    <Link to="/home">
      <div className="logo-container">
        <img src={logoIntro} alt="Logo QuizIA" id="logo" />
      </div>
    </Link>
  );
}

export default IntroPage;
