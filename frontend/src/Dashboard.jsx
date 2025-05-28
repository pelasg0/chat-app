import React from "react";
import "./Dashboard.css";
import profileImg from "./assets/only-logo-white.png";

export default function Dashboard({ user, onNewChat, onJoinChat, onLogout }) {
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
        <button className="primary-btn" onClick={onNewChat}>
          New Chat
        </button>
        <button className="primary-btn" onClick={onJoinChat}>
          Join Chat
        </button>
        <button className="secondary-btn" onClick={onLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}