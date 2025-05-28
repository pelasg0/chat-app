import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
    const [form, setForm] = useState({
      email: "",
      password: "",
      passwordRepeat: "",
  });

  const [passwordDoNotMatch, setPasswordDoNotMatch] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.password != form.passwordRepeat ? setPasswordDoNotMatch(prev => !prev) : ''
    alert("Registration submitted!\n" + JSON.stringify(form, null, 2));
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="new-password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="passwordRepeat"
          placeholder="Password"
          autoComplete="new-password"
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