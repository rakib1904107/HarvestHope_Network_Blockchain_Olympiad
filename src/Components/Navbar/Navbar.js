import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">
          {/* Navbar */}
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/SAVE_MORE_ON_APP">
                SAVE MORE ON APP
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sell-on-daraz">
                SELL ON DARAZ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/customer-care">
                CUSTOMER CARE
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/track-my-order">
                TRACK MY ORDER
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup-login">
                SIGNUP / LOGIN
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/baraj-affiliate-program">
                BARAJ AFFILIATE PROGRAM
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/language">
                ভাষা
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
