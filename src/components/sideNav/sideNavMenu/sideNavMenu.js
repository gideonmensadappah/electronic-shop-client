import React from "react";
import "./sideBar.css";
import { Link } from "react-router-dom";

export const SideBarMenu = () => {
  return (
    <>
      <h4>Category</h4>
      <div className="sidenav">
        <Link to="#about">About</Link>
        <Link to="#services">Services</Link>
        <Link to="#clients">Clients</Link>
        <Link to="#contact">Contact</Link>
      </div>
    </>
  );
};
