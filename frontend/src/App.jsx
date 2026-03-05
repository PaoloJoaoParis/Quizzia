import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import IntroPage from "./pages/introPage.jsx";
import QuizPage from "./pages/quizPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  );
}

export default App;
