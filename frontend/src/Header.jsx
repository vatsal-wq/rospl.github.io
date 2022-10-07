import React from "react";
import logo from "./image/logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="Main">
      <img className="mainimage" src={logo} alt="logo" />
    </div>
  );
}

export default Header;
