import React from "react";
import profileImg from "./assets/only-logo-white.png";
import { Link } from "react-router-dom";

export default function Dashboard({ user }) {
  return (
    <div className="dashboard-container">
      <div className="profile-section">
        <img
          src={user?.avatar || profileImg}
          alt="Profile"
          className="profile-avatar"
        />
        <h2 className="profile-name">{user?.name || "Username"}</h2>
      </div>
      <div className="dashboard-actions">
        <Link className="primary-btn">
          New Chat
        </Link>
        <Link className="primary-btn">
          Join Chat
        </Link>
        <Link className="secondary-btn" to={"/"}>
          Log Out
        </Link>
      </div>
    </div>
  );
}