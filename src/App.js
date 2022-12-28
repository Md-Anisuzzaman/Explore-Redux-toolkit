import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Dashboard from "./Pages/BackEnd/Dashboard";
import All from "./Pages/BackEnd/Management/User/All";
import Create from "./Pages/BackEnd/Management/User/Create";
import Details from "./Pages/BackEnd/Management/User/Details";
import Update from "./Pages/BackEnd/Management/User/Update";
import UserLayout from "./Pages/BackEnd/Management/User/UserLayout";
import BackEndLayout from "./Pages/Layouts/BackEndLayout";
// import { useState } from 'react';
import FrontEndLayout from "./Pages/Layouts/FrontEndLayout";

const App = () => {
  // const [islogin, setIsLogin] = useState("");


  // const handleLogin = () => {
  //   setIsLogin(true);
  //   navigate("/frontendlayout");
  // }

  // const handleLogOut = () => {
  //   setIsLogin(false);
  //   navigate("/");
  // }

  return (
    <div>
      <Routes>
        <Route path="" element={<FrontEndLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/dashboard" element={<BackEndLayout />}>
          <Route index element={<Dashboard />} />

          <Route path="user" element={<UserLayout />}>
            <Route index element={<All />} />
            <Route path="create" element={<Create />} />
            <Route path="edit" element={<Update />} />
            <Route path="details" element={<Details />} />
          </Route>
        </Route>


      </Routes>
    </div>
  );
};

export default App;
