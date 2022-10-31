import React from "react";
import ReactDOM from "react-dom/client";

const page = (
  <div>
    <img src="./react.png" alt="logo"></img>
    <h1>Fun facts about React</h1>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(page);