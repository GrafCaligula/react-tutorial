import React from "react";
import ReactDOM from "react-dom/client";

function Page() {
  return (
    <React.StrictMode>
      <div>
        <header>
          <nav>
            <img src="./react.png" alt="logo" width="40px" />
          </nav>
        </header>
        <h1>Reasons I'm excited to learn React</h1>
        <ol>
          <li>rtherth</li>
          <li>mu,u</li>
          <li>wqegqg</li>
          <li>zu,mzuk,</li>
        </ol>
        <footer><small>© 2022 Klöder developement, All rights reserved.</small></footer>
      </div>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
