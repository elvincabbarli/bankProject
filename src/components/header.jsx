import React from "react";
import { Link } from "react-router-dom";
import '../css/header.css'

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>Bank Respublika <span>Kredit App</span></h1>
      </Link>
      <Link to='musteri-login'>Müştəri Qeydiyyatı</Link>
    </header>
  );
};

export default Header;
