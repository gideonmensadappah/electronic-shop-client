import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/navbar/navbar";
import { DisplayProducts } from "./pages/displayHomeProducts/products";
import { SideNav } from "./components/sideNav/sideNavlist";
import { Sort } from "./components/sort/sort";

function App() {
  return (
    <>
      <Router>
        <div className="header item ">
          <NavBar />
        </div>
        <div className="App">
          <div className="sideNav item">
            <SideNav />
          </div>
          <div className="item-3 item ">
            <Sort />
          </div>
          <div className="products item">
            <DisplayProducts />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
