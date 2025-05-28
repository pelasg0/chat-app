import React, { useState } from "react";
import HomePage from "./HomePage";
import Register from "./Register";
import Login from "./Login";

function App() {
  const [screen, setScreen] = useState("home"); // "home", "register", or "login"

  if (screen === "register") {
    return <Register  onHomepageClick={() => setScreen("home")}/>;
  } else if (screen === "login") {
    return <Login onHomepageClick={() => setScreen("home")}/>;
  } else {
    return (
      <HomePage
        onRegisterClick={() => setScreen("register")}
        onLoginClick={() => setScreen("login")}
      />
    );
  }
}

export default App;