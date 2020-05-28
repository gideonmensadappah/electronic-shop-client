import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "/Users/admin/Desktop/reactProjects/electronicShop/electronic-shop-client/node_modules/@fortawesome/fontawesome-free/css/all.css";
import "/Users/admin/Desktop/reactProjects/electronicShop/electronic-shop-client/node_modules/bootstrap/dist/css/bootstrap.css";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
