import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      navigate("/"); // Go to Home after login
    } else {
      alert("Please enter credentials");
    }
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#121a2f" }}>
      <form onSubmit={handleSubmit} style={{ background: "#202040cc", padding: "2em", borderRadius: 16, color: "#fff" }}>
        <h2>Login</h2>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" style={{ margin: "1em 0", width: "100%" }} />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" style={{ margin: "1em 0", width: "100%" }} />
        <button type="submit" style={{ width: "100%", padding: "0.6em", borderRadius: 8 }}>Login</button>
      </form>
    </div>
  );
}