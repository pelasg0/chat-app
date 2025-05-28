import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import profileImg from "./assets/blank-profile-picture.png";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              user={{ name: "User", avatar: profileImg }}
              onNewChat={() => console.log("New Chat")}
              onJoinChat={() => console.log("Join Chat")}
              onLogout={() => window.location.href = "/"}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;