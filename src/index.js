import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import All from "./all.css";
import App from "./App";
import AOS from "./components/axos/aos.css"


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
