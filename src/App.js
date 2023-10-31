import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Buy from "./pages/buy";
import Sell from "./pages/sell";
import Transactions from "./pages/transactions";
import Account from "./pages/account";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/"  element={<Account />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;
