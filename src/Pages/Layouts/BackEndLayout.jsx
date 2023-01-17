import React, { useEffect } from "react";
import LeftSideBar from "../BackEnd/Sidebar/LeftSidebar"
import Header from "../BackEnd/Header/Header"
import { Outlet, useNavigate } from "react-router";
import { useSelector } from "react-redux";

const BackEndLayout = () => {
  const { authenticated } = useSelector((state) => state.auth)
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      navigate("/login")
    }
  }, [authenticated, navigate])


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
