import { Link } from 'react-router-dom'     
import "../styles/pages/homePage.css"

function HomePage(){
    return (
        <section className="home-container">
            <Link to="/quiz">
                <button className="start-button">Start Quiz</button>
            </Link>
        </section>
    )
}

export default HomePage;