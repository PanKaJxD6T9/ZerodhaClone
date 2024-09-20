import React from "react";

const Navbar = () => {
  return (
    <div className= 'fixed-top bg-white border-bottom navbarMain'>
      <div className="container">
        <div
          style={{
            width: "100%",
            height: "75px",
            display: "flex",
            alignItems: "center",
          }}
          className="row px-5"
        >
          <div className="col-4">
            <img style={{ width: "150px" }} src="assets/logo.svg" alt="logo" />
          </div>
          <div className="col-4"></div>
          <div
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "40px" }}
            className="col-4"
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              className="text-muted"
              href="#"
            >
              SignUp
            </a>
            <a
              style={{ textDecoration: "none", color: "black" }}
              className="text-muted"
              href="#"
            >
              About
            </a>
            <a
              style={{ textDecoration: "none", color: "black" }}
              className="text-muted"
              href="#"
            >
              Products
            </a>
            <a
              style={{ textDecoration: "none", color: "black" }}
              className="text-muted"
              href="#"
            >
              Pricing
            </a>
            <a
              style={{ textDecoration: "none", color: "black" }}
              className="text-muted"
              href="#"
            >
              Support
            </a>
            <a style={{ textDecoration: "none", color: "black", fontSize: "20px" }} href="#">
              <i class="fa-solid fa-bars"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
