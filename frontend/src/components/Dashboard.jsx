import profileImg from "/only-logo-white.png";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="profile-section">
        <img
          src={profileImg}
          alt="Profile"
          className="profile-avatar"
        />
        <h2 className="profile-name">{"Username"}</h2>
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