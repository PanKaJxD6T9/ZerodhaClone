import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <img style={{ width: "150px" }} src="assets/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="col-4"></div>
          <div
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "40px" }}
            className="col-4"
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              className="text-muted"
              to="/signup"
            >
              SignUp
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              className="text-muted"
              to="/about"
            >
              About
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              className="text-muted"
              to="/products"
            >
              Products
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              className="text-muted"
              to="/pricing"
            >
              Pricing
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              className="text-muted"
              to="/support"
            >
              Support
            </Link>
            <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/">
              <i class="fa-solid fa-bars"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
