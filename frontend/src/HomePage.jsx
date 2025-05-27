import React from "react";
import "./HomePage.css";

export default function HomePage({ onRegisterClick, onLoginClick }) {
  return (
    <main className="homepage-container">
      <h1>Welcome to the Chat App!</h1>
      <p>Welcome to the app for anonymous communication.</p>
      <div className="button-group">
        <button className="primary-btn" onClick={onLoginClick}>Login</button>
        <button className="secondary-btn" onClick={onRegisterClick}>Register</button>
      </div>
    </main>
  );
}