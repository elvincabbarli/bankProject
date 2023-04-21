import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>Bank Respublika <span>Kredit App</span></h1>
      </Link>
    </header>
  );
};

export default Header;
