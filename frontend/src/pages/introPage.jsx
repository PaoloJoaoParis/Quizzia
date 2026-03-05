import logoIntro from "../assets/logo-intro.png";
import { Link } from 'react-router-dom'
import "../styles/pages/introPage.css"

function IntroPage(){
    return (
        <Link to="/home">
            <div className="logo-container">     
                    <img src={logoIntro} alt="Logo QuizIA" id="logo" />
            </div>
        </Link>
    )
}

export default IntroPage;