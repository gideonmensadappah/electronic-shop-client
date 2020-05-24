import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/navbar/navbar";
import { DisplayProducts } from "./pages/displayHomeProducts/products";
function App() {
  return (
    <>
      <Router>
        <div className="header item ">
          <NavBar />
        </div>
        <div className="App">
          <div className="sideNav item">side Nav</div>
          <div className="item-3 item">Futures...</div>
          <div className="products item">
            <DisplayProducts />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
