import React from "react";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";


const FrontEndLayout = () => {
  return (
    <>
      <div id="main-wrapper">
        <Header></Header>
        <LeftSidebar></LeftSidebar>
        {/* <RightSidebar></RightSidebar> */}
        <div className="page-wrapper">

          <main  style={{height:"100vh"}}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officiis, voluptatum? Exercitationem officiis
                        accusantium sequi reiciendis, asperiores doloribus
                        pariatur laborum minima ad a hic numquam beatae vitae!
                        Corrupti repellat rem tenetur?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default FrontEndLayout;
