import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({email: "", password: ""});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const handleSubmit = (e) => {
    if (form.password === form.passwordRepeat) {
      e.preventDefault();
      // TODO: Send form data to backend API
      alert("Registration submitted!\n" + JSON.stringify(form, null, 2));
    }
    else {
      e.preventDefault();
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
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
        <input
          type="password"
          name="passwordRepeat"
          placeholder="Password"
          value={form.passwordRepeat}
          onChange={handleChange}
          required
        />
        <button type="submit" className="primary-btn">
          Register
        </button>
        <Link className="secondary-btn" to={"/"}>
          Cancel
        </Link>
      </form>
    </div>
  );
}