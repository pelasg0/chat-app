import React, { useState } from "react";
import HomePage from "./HomePage";
import Register from "./Register";

function App() {
  const [showRegister, setShowRegister] = useState(false);

  return showRegister ? (
    <Register />
  ) : (
    <HomePage onRegisterClick={() => setShowRegister(true)} />
  );
}

export default App;