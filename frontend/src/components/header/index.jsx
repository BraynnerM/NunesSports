import React from "react";
import {  Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      
      <nav>
        
            <Link to="/">Nunes Sports</Link>
          <ul>
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
