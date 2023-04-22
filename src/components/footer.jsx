import React from "react";
import logo from "../images/logo1.svg";
import { Link } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="part-1">
          <h1>Bank Respublika</h1>
          <div className="socials">
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-whatsapp" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
