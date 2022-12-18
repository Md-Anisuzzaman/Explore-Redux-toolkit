import React from "react";
import { Route, Routes } from "react-router-dom";
import FrontEndLayout from "./Pages/Layouts/FrontEndLayout";


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
