import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
// import Dashboard from "./Pages/BackEnd/Dashboard.jsx"
import FrontEndLayout from "./Pages/Layouts/FrontEndLayout";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const App = () => {
  const [islogin, setIsLogin] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLogin(true);
    navigate("/frontendlayout");
  }

  const handleLogOut = () => {
    setIsLogin(false);
    navigate("/");
  }


  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Dashboard />}>
          <Route path="/orders" element={<Orders />} />
          <Route path="/hello" element={<Hello />} />
        </Route> */}
        <Route path="" element={<Login handleLogin={handleLogin} />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/frontendlayout" element={<FrontEndLayout handleLogOut={handleLogOut} />} />
      </Routes>
      {/* <FrontEndLayout></FrontEndLayout> */}
      {/* <Login></Login> */}
    </div>
  );
};

export default App;
