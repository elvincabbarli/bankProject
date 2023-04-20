import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>Bank Respublika</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/new-login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
