import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import React from 'react'

const Signup = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/signup", { email, password });
      localStorage.setItem("access_token", res.data.access_token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.detail || "Signup failed");
    }
  };

  
  return (
    <div style={{textAlign:'center', marginTop:'200px'}}>
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
      <div>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      </div>
      <button type="submit">Signup</button>
    </form>
    </div>
  )
}

export default Signup