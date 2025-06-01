import { useState } from "react";
import { Link } from "react-router-dom";

// Login component for user authentication
export default function Login() {
  // State for form fields (email and password)
  const [form, setForm] = useState({ email: "", password: "" });

  // Handle input changes and update form state
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send form data to backend API for authentication
    alert("Login submitted!\n" + JSON.stringify(form, null, 2));
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        {/* Email input */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        {/* Password input */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        {/* Login button */}
        <button type="submit" className="primary-btn">
          Login
        </button>
        {/* Cancel button: returns to homepage */}
        <Link className="secondary-btn" to={"/"}>
          Cancel
        </Link>
      </form>
    </div>
  );
}