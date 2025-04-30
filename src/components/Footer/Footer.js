import React from "react";
import { Link } from "react-router";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import fifty from "../../assets/fiftylogo.png";
import "./footerStyles.css";
const Footer = () => {
  const d = new Date();
  return (
    <div className="footer">
      <div className="footer-main-flex">
        <div className="footer-top">
          <h1>IEEE AAST Student Branch</h1>
          <div className="footer-logos-container">
            <img src={fifty} alt="AAST" />
          </div>
        </div>
        <div className="footer-right-container">
          <p>Connecting minds. Innovating solutions. Inspiring change.</p>
          <div className="footer-social-media-links">
            <Link to="">
              <div>
                <InstagramIcon></InstagramIcon>
              </div>
            </Link>
            <Link to="">
              <div>
                <FacebookIcon></FacebookIcon>
              </div>
            </Link>
            <Link to="">
              <div>
                <LinkedInIcon></LinkedInIcon>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <p>Copyrights © {d.getFullYear()}. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
