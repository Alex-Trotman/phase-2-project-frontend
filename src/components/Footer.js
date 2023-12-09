// Footer.js

import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-text">
        &copy; 2023 Alex's Amazon Clone. All rights reserved.
      </p>
      <div className="footer-links">
        <a
          href="https://github.com/Alex-Trotman"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <GitHubIcon className="footer-icon" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/alex-trotman-7173b1245/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <LinkedInIcon className="footer-icon" />
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Footer;
