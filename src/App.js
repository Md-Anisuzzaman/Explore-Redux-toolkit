import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/orders" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Dashboard />
    </div>
  );
};

export default App;
