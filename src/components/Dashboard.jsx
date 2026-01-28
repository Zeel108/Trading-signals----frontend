import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import API from "../api/axios";
import { fetchSignals } from "../api/signals";
import Table from "../common/Table"; // Reusable Table component

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [signals, setSignals] = useState([]);
  const navigate = useNavigate();

  // Payment
  const handlePayment = async () => {
    try {
      const res = await API.post("/billing/create-checkout");
      window.location.href = res.data.checkout_url;
    } catch {
      alert("Payment failed");
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  // Load user and signals
  const loadData = async () => {
    const me = await API.get("/auth/me");
    setUser(me.data);

    const sig = await fetchSignals();
    setSignals(sig);
  };

  useEffect(() => {
    API.get("/auth/me")
      .then(res => setUser(res.data))
      .catch(() => {
        localStorage.removeItem("access_token");
        navigate("/login");
      });
    loadData();
  }, []);

  if (!user) return <p>Loading...</p>;

  // Define columns for table
  const columns = [
    { id: "id", label: "ID", numeric: true },
    { id: "symbol", label: "Symbol", numeric: false },
    { id: "name", label: "Name", numeric: false },
    { id: "prChange", label: "Price change", numeric: false },
    { id: "prcChange", label: "Change", numeric: false },
    { id: "price", label: "Entry Price", numeric: true },
    { id: "rsi", label: "RSI", numeric: false },
    { id: "macd", label: "MACD", numeric: true },
    { id: "date", label: "Date", numeric: false },
  ];

  // Map signals into rows for Table
  const rows = signals.map((sig, index) => ({
    id: index + 1,
    symbol: sig.symbol,
    name: sig.name,
    prChange:sig.prChange,
    prcChange:sig.prcChange,
    price: sig.price,
    rsi:sig.rsi,
    macd:sig.macd,
    date: new Date(sig.created_at).toLocaleDateString(),
  }));

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", gap: "100px", alignItems: "center", marginBottom: "20px" }}>
        <h2>Trading Signals</h2>
        <div>
          <p>{user.is_paid ? "You are a paid subscriber" : "To see more signals, buy a subscription"}</p>
        </div>
        <div style={{marginRight:"20px"}}>
          {!user.is_paid && (
            <Button onClick={handlePayment} style={{padding:"8px"}} text="Subscribe" />
          )}
        </div>
        <div >
          <Button onClick={logout} style={{padding:"5px"}} text="Logout" />
            
        </div>
      </div>

      <hr />

      <h2>Welcome {user.email}</h2>

      {/* Render Table */}
      <Table columns={columns} rows={rows} title="Trading Signals" />
    </div>
  );
};

export default Dashboard;
