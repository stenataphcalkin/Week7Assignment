import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import RateKhasrae from "./RateKhasrae.jsx";

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
        <h1>Welcome Traveller, to Rate Thine Adventurer</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/Khasrae">Khasrae</Link> |{" "}
          <Link to="/ComingSoon">Coming Soon</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/Khasrae" element={<RateKhasrae />} />
          <Route path="/ComingSoon" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

// //!The Form and Image container can probably be moved to their own components
// //Form and Image Container
// import RTAReviewForm from "./components/formImageContainer/formImageContainer.jsx";
// import "./components/formImageContainer/formImageContainer.css";
// //Reviews Container
// import ReviewsContainer from "./components/reviewsContainer/reviewsContainer.jsx";
// import "./components/reviewsContainer/reviewsContainer.css";
// //!The Form and Image container can probably be moved to their own components

// export default function App() {
//   return (
//     <>
//       <Header />
//       <BrowserRouter>
//         <h1>Welcome to my website</h1>
//         <nav>
//           <Link to="/about">About</Link> | <Link to="/">Home</Link>
//         </nav>
//         <Routes>
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/" element={<HomePage />} />
//         </Routes>
//       </BrowserRouter>
//       <Footer />
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <Header />
//       <BrowserRouter>
//         <Routes>
//           <Route path="Khasrae" element={<h3>Rate Khasrae</h3>} />
//         </Routes>
//       </BrowserRouter>

//       <RTAReviewForm />
//       <ReviewsContainer />
//       <Footer />
//     </>
//   );
// }

// export default App;
