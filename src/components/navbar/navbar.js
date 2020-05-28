import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const NavBar = () => {
  const cartNumber = 2;
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Electro <i className="fas fa-globe-africa"></i>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/shop/checkout">
                <span span="cart-Number">{cartNumber}</span>
                <i className="fas fa-shopping-cart cart-icon"> </i>
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link" to="/user/login">
                Login <span className="sr-only"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
