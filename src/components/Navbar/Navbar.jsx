import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { Link } from "react-router-dom";
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
        <Link to="/blog" className="btn">
          <span className="btn-text">Contact</span>
        </Link>
        <Link to="/blog" className="btn">
          <span className="btn-text">Blogs</span>
        </Link>
        <Link to="/blog" className="btn">
          <span className="btn-text">Blogs</span>
        </Link>
      </div>
      {/* <div className="toggle-container"> */}
      <div
        className={`dialog-button ${theme ? "" : "disabled"}`}
        onClick={setTheme}
      >
        {theme ? <BsMoon size="20px" /> : <BsSun size="20px" />}
      </div>
      {/* </div> */}
      {/* <div className="tooltip"> */}
      {/* <ToggleButton theme={theme} setTheme={setTheme} /> */}
      {/* <span className="tooltiptext">Change theme </span>
        </div> */}
    </div>
  );
};

export default Navbar;
