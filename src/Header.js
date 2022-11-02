import React from "react";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img src="./react.png" alt="logo" className="nav-img" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;