import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import RateKhasrae from "./RateKhasrae.jsx";
import ComingSoon from "./ComingSoon.jsx";
import "./app.css";

// Header
import Header from "./components/header/header.jsx";
import "./components/header/header.css";

// Footer
import Footer from "./components/footer/footer.jsx";
import "./components/footer/footer.css";

export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <h1>Rate Thine Adventurer</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/Khasrae">Khasrae</Link> |{" "}
          <Link to="/ComingSoon">Coming Soon</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/Khasrae" element={<RateKhasrae />} />
          <Route path="/ComingSoon" element={<ComingSoon />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
