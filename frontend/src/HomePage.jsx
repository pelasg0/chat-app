import React from "react";
import "./HomePage.css";
import homepageImg from "./assets/only-logo-white.png";

export default function HomePage({ onRegisterClick, onLoginClick }) {
  return (
    <main className="homepage-container">
      <img src={homepageImg} alt="Chat App" style={{ width: "150px", marginBottom: "1em" }} />
      <h1>Welcome to Babel's Room!</h1>
      <p>The chat application where you can remain fully anonymous.</p>
      <div className="button-group">
        <button className="primary-btn" onClick={onLoginClick}>Login</button>
        <button className="secondary-btn" onClick={onRegisterClick}>Register</button>
      </div>
    </main>
  );
}