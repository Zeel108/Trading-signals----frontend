import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";


const Dashboard = () => {

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      const res = await API.post("/billing/create-checkout");
      window.location.href = res.data.checkout_url;
    } catch {
      alert("Payment failed");
    }
  };

  useEffect(() => {
    API.get("/auth/me")
      .then(res => setUser(res.data))
      .catch(() => {
        localStorage.removeItem("access_token");
        navigate("/");
      });
  }, []);

  if (!user) return <p>Loading...</p>;


  return (
    <div>

      <div>
        <h2>Welcome {user.email}</h2>
        <p>Paid: {user.is_paid ? "Yes" : "No"}</p>
      </div>

    </div>
  )
}

export default Dashboard