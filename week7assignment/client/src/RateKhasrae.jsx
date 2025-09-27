export default function RateKhasrae() {
  return (
    <>
      <h2>Rate Khasrae Seleni</h2>
      <p>Rate this plant carrying tree dweller.</p>
    </>
  );
}

import { BrowserRouter, Routes, Route } from "react-router";

//Form and Image Container
import RTAReviewForm from "./components/formImageContainer/formImageContainer.jsx";
import "./components/formImageContainer/formImageContainer.css";
//Reviews Container
import ReviewsContainer from "./components/reviewsContainer/reviewsContainer.jsx";
import "./components/reviewsContainer/reviewsContainer.css";

// Need to alter the below to allow for the above to run
// function App() {
//   return (
//     <>
//       <Header />
//       <BrowserRouter>
//         <Routes>
//           <Route path="Khasrae" element={<h2>Rate Khasrae</h2>} />
//         </Routes>
//       </BrowserRouter>

//       <RTAReviewForm />
//       <ReviewsContainer />
//       <Footer />
//     </>
//   );
// }

// export default App;
