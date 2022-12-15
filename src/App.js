import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Hello from "./components/Hello";
import Orders from "./components/Orders";
import FrontEndLayout from "./Layouts/FrontEndLayout";

const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Dashboard />}>
          <Route path="/orders" element={<Orders />} />
          <Route path="/hello" element={<Hello />} />
        </Route> */}
      </Routes>
      <FrontEndLayout></FrontEndLayout>
      {/* <Dashboard /> */}
    </div>
  );
};

export default App;
