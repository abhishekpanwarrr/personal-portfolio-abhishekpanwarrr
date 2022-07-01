import React from "react";
import { BsInstagram, BsGithub, BsTelephone } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-links-container">
        <div className="footer-links">
          <a
            href="https://instagram.com/abhishekpanwarrr"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram size="22px" style={{ marginRight: "30px" }} />
          </a>
          <a
            href="https://github.com/abhishekpanwarrr"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub size="22px" style={{ marginRight: "30px" }} />
          </a>
          <a href="tel:+919991237576" target="_blank" rel="noreferrer">
            <BsTelephone size="22px" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishekpanwarrr/"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "30px" }}
          >
            <BsLinkedin size="22px" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright © Abhishek Panwar</p>
      </div>
    </div>
  );
};

export default Footer;
