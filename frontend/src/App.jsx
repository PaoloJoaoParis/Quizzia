import { Routes, Route } from "react-router-dom";
import IntroPage from "./pages/introPage.jsx";
import HomePage from "./pages/homePage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
