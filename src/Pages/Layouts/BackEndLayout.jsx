import React from "react";
import LeftSideBar from "../BackEnd/Sidebar/LeftSidebar"
import Header from "../BackEnd/Header/Header"
import { Outlet } from "react-router";

const BackEndLayout = () => {
  return (
    <>
      <div id="main-wrapper ">
       <Header></Header>
        <LeftSideBar></LeftSideBar>
        <div className="page-wrapper">
          <main style={{ height: "calc(100vh - 66px)" }}>
            <Outlet></Outlet>
          </main>
        </div>
      </div>
    </>
  );
};

export default BackEndLayout;
