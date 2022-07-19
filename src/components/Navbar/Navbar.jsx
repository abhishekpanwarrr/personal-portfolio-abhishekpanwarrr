import React, { useContext } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import "./Navbar.css";
import { ThemeContext } from "../../context/ThemeContext";
const Navbar = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const themeToggler = () => {
    setTheme((theme) => !theme);
  };
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
        onClick={themeToggler}
      >
        {theme ? <BsMoon size="20px" /> : <BsSun size="20px" />}
      </div>
    </div>
  );
};

export default Navbar;
