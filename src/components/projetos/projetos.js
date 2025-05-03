import React from 'react';
import './projetos.css';
import { useNavigate } from 'react-router-dom';

function Projetos() {
  const navigate = useNavigate();

  return (
    <div className="projetos">
  <h1 className="logo-proj">Meus Projetos</h1>
  <div className="imagens">
    <ul>
      <li className="projeto">
        <img 
          src={require('./churrascometro.png')} 
          alt="churrascometro" 
          className="churrascometro" />
        <p>Churrascômetro</p>
        <button onClick={() => navigate("/meusprojetos")} className="ver-mais">Ver mais</button>
      </li>
      <li className="projeto">
        <img 
          src={require('./liftly.png')} 
          alt="liftly" 
          className="liftly"/>
        <p>Liftly</p>
        <button onClick={() => navigate("/meusprojetos")} className="ver-mais">Ver mais</button>
      </li>
    </ul>
  </div>
</div>

  );
}

export default Projetos;
