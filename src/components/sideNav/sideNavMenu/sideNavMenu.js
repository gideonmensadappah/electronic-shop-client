import React from "react";
import "./sideBar.css";
export const SideBarMenu = () => {
  return (
    <div className="container">
      <h4>Category</h4>
      <div className="row">
        <div className="col-4">
          <nav className="navbar">
            <ul>
              <li>Bag</li>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
