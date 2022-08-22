import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const user = true;
  return (
    <div className="header fixed-top">
      <div className="container">
        <div className="row">
          <div className="header-wrapper">
            <div className="logo">
              <Link to="/" className="text-decoration-none">
                Ecommerce
              </Link>
            </div>
            <div className="user-actions">
              <Link className="text-decoration-none" to="/cart">
                Cart
              </Link>
              <div className="user-intro">Guest</div>

              {user ? (
                <div className="logout-btn"> Logout </div>
              ) : (
                <div className="login-btn">
                  <Link to="/login">Login</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;