import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
// import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ theme, setTheme }) => {
  return (
    <div
      className="header-nav"
      style={{
        background: theme ? "#e9d5a1" : "#494949",
        borderColor: theme ? "#f4d27c" : "rgb(84, 82, 82)",
      }}
    >
      <div>
        <a href="#footer" className="btn">
          <span className="btn-text">Contact</span>
        </a>
      </div>
      <div
        className={`dialog-button ${theme ? "" : "disabled"}`}
        onClick={setTheme}
      >
        {theme ? <BsMoon size="20px" /> : <BsSun size="20px" />}
      </div>
    </div>
  );
};

export default Navbar;
