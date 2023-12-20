import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Header = () => {
  return (
    <header className="header">
      <nav className="menu-bar">
        <Link className="menu-bar-home" to="/">Nunes Sports</Link>
        <ul className="menu-bar-links">
          <li>
            <Link to="/list">Lista</Link>
          </li>
          <li>
            <Link to="/new">Cadastro</Link>
          </li>
          <li>
            <Link to="/update">Atualização</Link>
          </li>
          <li>
            <Link to="/delete">Exclusão</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
