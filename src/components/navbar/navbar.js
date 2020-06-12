import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { connect } from "react-redux";
const NavBar = ({ storeState }) => {
  const { cartReducer } = storeState;
  const cartNumber = cartReducer.length;
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Electro <i className="fas fa-globe-africa"></i>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav nav-ul-right ml-auto">
            <li className="nav-item active">
              <Link className="nav-link shop-cart" to="/shop/cart">
                <div span="cart-Number">{cartNumber}</div>
                <i className="fas fa-shopping-cart cart-icon"> </i>
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link " to="/user/login">
                Login <span className="sr-only"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
const mapStateToProps = (storeState) => {
  return { storeState };
};
export default connect(mapStateToProps)(NavBar);
