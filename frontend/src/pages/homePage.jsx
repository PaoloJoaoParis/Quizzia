import { Link } from "react-router-dom";
import "../styles/pages/homePage.css";
import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    <section className="home-container">
      <Link to="/quiz">
        <Button>Start Quiz</Button>
      </Link>
    </section>
  );
}

export default HomePage;
