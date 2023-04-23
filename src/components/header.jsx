import React from "react";
import { Link } from "react-router-dom";
import '../css/header.css'

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>Kredit App</h1>
      </Link>
      <div>
        <Link className="muster-login" to='musteri-login'>Qeydiyyat(user)</Link> &nbsp;&nbsp;&nbsp;
        <Link className="muster-login" to='musteri-login'>Qeydiyyat(zamin)</Link>
      </div>
    </header>
  );
};

export default Header;
