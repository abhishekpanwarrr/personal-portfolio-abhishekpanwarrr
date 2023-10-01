import React, { useContext } from "react";
import coding from "../../assets/coding.png";
import "./Header.css";
import { Wave } from "react-animated-text";
import { ThemeContext } from "../../context/ThemeContext";
const Header = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <div
      className="header"
      style={{ background: theme ? "" : "#494949", color: theme ? "" : "#fff" }}
    >
      <div className="header-container">
        <img src={coding} alt="coding" />
        <p data-cy="dev-name">ABHISHEK PANWAR</p>
        <div className="details">
          <Wave
            data-cy="wave"
            text="FRONT-END DEVELOPER"
            effect="stretch"
            effectChange={2.0}
            className="font"
          />
        </div>
        {/* <img className="github" src={github} alt="github" /> */}
      </div>
    </div>
  );
};

export default Header;
