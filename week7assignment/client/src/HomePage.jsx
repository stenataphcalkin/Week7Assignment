import { Link } from "react-router";

export default function HomePage() {
  return (
    <div>
      <h2>Home page</h2>
      <Link to="/about">About</Link>
    </div>
  );
}
