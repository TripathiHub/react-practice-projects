import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
// ReactDom.createRoot(entryPoint).render(React.createElement(App));
// this will also work beacuse using jsx is not essential but convenient ,instead of jsx nested 
// react create element can be used
