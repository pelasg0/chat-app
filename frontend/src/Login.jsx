import React, { useState } from "react";
import "./Login.css";

export default function Login({onHomepageClick}) {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send form data to backend API
    alert("Login submitted!\n" + JSON.stringify(form, null, 2));
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="primary-btn">
          Login
        </button>
        <button className="secondary-btn" onClick={onHomepageClick}>
          Cancel
        </button>
      </form>
    </div>
  );
}