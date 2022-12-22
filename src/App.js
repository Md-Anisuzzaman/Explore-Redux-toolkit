import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
// import FrontEndLayout from "./Pages/Layouts/FrontEndLayout";


const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Dashboard />}>
          <Route path="/orders" element={<Orders />} />
          <Route path="/hello" element={<Hello />} />
        </Route> */}
        <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />} />
      </Routes>
      {/* <FrontEndLayout></FrontEndLayout> */}
      {/* <Dashboard /> */}
      {/* <Login></Login> */}
    </div>
  );
};

export default App;
