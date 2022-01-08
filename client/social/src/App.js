import React from "react";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/Login";
import Register from "./components/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
