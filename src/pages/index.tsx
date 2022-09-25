import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../components/nav/Nav";
import HomePage from "./HomePage";
import SignUp from "./sign/SignUp";
import Login from "./log/Login"
import Reset from "./reset/Reset"
import ResetPassword from "./reset/ResetPassword"
import Enter from "./enter/Enter";

const index = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/enter" element={<Enter />} />
        <Route path="/passwordreset/:resetToken" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
};

export default index;
