import React from "react";
import coding from "../../assets/coding.png";
// import github from "../../assets/github.png";
import "./Header.css";
import { Wave } from "react-animated-text";
import ToggleButton from "../ToggleButton";
import { Link } from "react-router-dom";

const Header = ({ setTheme, theme }) => {
  return (
    <div
      className="header"
      style={{ background: theme ? "" : "#494949", color: theme ? "" : "#fff" }}
    >
      <div className="header-nav">
        {/* <Link
          to="blog"
          className="btn btn-2"
          //   style={{
          //     color: theme ? "" : "#fff",
          //     // border: theme ? "" : "1px solid white",
          //   }}
        >
          Blog
        </Link> */}
        <Link to="/blog" class="btn">
          <span class="btn-text">Contact</span>
        </Link>
        <Link to="/blog" class="btn">
          <span class="btn-text">Blogs</span>
        </Link>
        <Link to="/blog" class="btn">
          <span class="btn-text">Blogs</span>
        </Link>
      </div>
      <div className="header-container">
        <img src={coding} alt="coding" />
        <p>ABHISHEK PANWAR</p>
        <div className="details">
          <Wave
            text="FRONT-END DEVELOPER"
            effect="stretch"
            effectChange={2.0}
            className="font"
          />
        </div>
        {/* <img className='github' src={github} alt='github' /> */}
        <div className="tooltip">
          <ToggleButton theme={theme} setTheme={setTheme} />
          <span className="tooltiptext">Change theme </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
