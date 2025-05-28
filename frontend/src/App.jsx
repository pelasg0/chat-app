import React, { useState } from "react";
import HomePage from "./HomePage";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import profileImg from "./assets/blank-profile-picture.png";

function App() {
  const [screen, setScreen] = useState("dashboard"); // "home", "register", or "login"

  if (screen === "register") {
    return <Register  onHomepageClick={() => setScreen("home")}/>;
  } else if (screen === "login") {
    return <Login onHomepageClick={() => setScreen("home")}/>;
  }
    else if (screen === "dashboard"){
    return (
      <Dashboard
        user={{ name: "User", avatar: profileImg }}
        onNewChat={() => console.log("New Chat")}
        onJoinChat={() => console.log("Join Chat")}
        onLogout={() => setScreen("home")}
      />
    );
    } 
    else {
    return (
      <HomePage
        onRegisterClick={() => setScreen("register")}
        onLoginClick={() => setScreen("login")}
      />
    );
  }
}

export default App;