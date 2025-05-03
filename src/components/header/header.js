import React from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Importando Link
import './header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1 onClick={() => navigate("/")}>JN</h1> 
        </div>
        <nav>
          <ul>
            {/* Usando Link do React Router para navegação */}
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/meusprojetos">Projetos</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
