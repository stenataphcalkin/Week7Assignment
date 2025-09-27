import { BrowserRouter, Routes, Route } from "react-router";
//Form and Image Container
import RTAReviewForm from "./components/formImageContainer/formImageContainer.jsx";
import "./components/formImageContainer/formImageContainer.css";
//Reviews Container
import ReviewsContainer from "./components/reviewsContainer/reviewsContainer.jsx";
import "./components/reviewsContainer/reviewsContainer.css";

export default function RateKhasrae() {
  return (
    <>
      <h2>Rate Khasrae Seleni</h2>
      <p>Rate this plant carrying tree dweller.</p>
      <RTAReviewForm />
      <ReviewsContainer />
    </>
  );
}
