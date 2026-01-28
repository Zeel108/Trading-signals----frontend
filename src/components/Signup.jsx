import { useState } from "react";
import { useNavigate , Link} from "react-router-dom";
import API from "../api/axios";
import Button from "../common/Button";
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
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.detail || "Signup failed");
    }
  };

  
  return (
    <div style={{textAlign:'center'}}>
      <div className="auth-page">
      <div className="auth-box">
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
      <div>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      </div>
      <Button text="Signup" type="submit" />
      <div style={{marginTop:'15px', cursor:"pointer"}}><Link to="/login" style={{textDecoration:"none", fontWeight:"500"}}>Login</Link>
      </div>
    </form>
    </div>
    </div>
    </div>
  )
}

export default Signup