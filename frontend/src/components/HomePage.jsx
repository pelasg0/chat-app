import homepageImg from "/only-logo-white.png";
import { Link } from "react-router-dom";

export default function HomePage({ }) {
  return (
    <main className="homepage-container">
      <img src={homepageImg} alt="Chat App" style={{ width: "150px", marginBottom: "1em" }} />
      <h1>Welcome to Babel's Room!</h1>
      <p>The chat application where you can remain fully anonymous.</p>
      <div className="button-group">
        <Link to={"/login"} className="primary-btn">Login</Link>
        <Link to={"/register"} className="secondary-btn">Register</Link>
      </div>
    </main>
  );
}