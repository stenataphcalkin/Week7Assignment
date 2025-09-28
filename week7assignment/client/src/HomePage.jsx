import { Link } from "react-router";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-page-container">
      <h2>Welcome Traveller, to Rate Thine Adventurer</h2>
      <p>
        Following the mysterious fate that befelled the original, this has been
        re-cast in a whole new magical system devoid of paper and wood, meaning
        no more Kobold related arson, traumatised dryads, or fibre yearning
        direhorses will befall it.
      </p>

      <p>
        {" "}
        Currently, Khasrae is the one who has successfully navigated the aether
        to appear on this board. More adventurers are in the process of signing
        up...some may have experienced a wild magic surge and will take slightly
        longer to do so, providing they survive.
      </p>
    </div>
  );
}
