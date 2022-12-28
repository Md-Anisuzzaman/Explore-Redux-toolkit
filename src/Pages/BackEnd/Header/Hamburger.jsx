import React from "react";

const Hamburger = () => {
  return (
    <>
      <div className="row page-titles">
        <div className="col-md-5 align-self-center">
          <h4 className="text-themecolor">Blank Page</h4>
        </div>
        <div className="col-md-7 align-self-center text-end">
          <div className="d-flex justify-content-end align-items-center">
            <ol className="breadcrumb justify-content-end">
              <li className="breadcrumb-item">
                <a href="#/">Home</a>
              </li>
              <li className="breadcrumb-item active">Blank Page</li>
            </ol>
            <button
              type="button"
              className="btn btn-info d-none d-lg-block m-l-15 text-white"
            >
              <i className="fa fa-plus-circle" /> Create New
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
