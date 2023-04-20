import React from "react";
import logo from "../images/logo1.svg";
import { Link } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="part-1">
          <img src={logo} alt="" />
        </div>
        <div className="part-2">
          <div>
            <h4>Ferdi Musteriler</h4>
            <ul>
              <li>
                <Link>Link 1</Link>
              </li>
              <li>
                <Link>Link 2</Link>
              </li>
              <li>
                <Link>Link 3</Link>
              </li>
              <li>
                <Link>Link 4</Link>
              </li>
              <li>
                <Link>Link 5</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Onlayn Xidmetler</h4>
            <ul>
              <li>
                <Link>Link 1</Link>
              </li>
              <li>
                <Link>Link 2</Link>
              </li>
              <li>
                <Link>Link 3</Link>
              </li>
              <li>
                <Link>Link 4</Link>
              </li>
              <li>
                <Link>Link 5</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Bank Haqqinda</h4>
            <ul>
              <li>
                <Link>Link 1</Link>
              </li>
              <li>
                <Link>Link 2</Link>
              </li>
              <li>
                <Link>Link 3</Link>
              </li>
              <li>
                <Link>Link 4</Link>
              </li>
              <li>
                <Link>Link 5</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
