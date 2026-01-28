import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import React from 'react'

const Login = () => {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("access_token", res.data.access_token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.detail || "Login failed");
    }
  };


  return (
    
    <div style={{textAlign:'center'}}>
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>

    </div>
  )
}

export default Login