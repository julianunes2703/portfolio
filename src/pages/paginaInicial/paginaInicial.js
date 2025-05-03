import React from 'react';
import './paginaInicial.css';
import Header from '../../components/header/header';
import Habilidades from '../../components/habilidades/habilidades';
import Projetos from '../../components/projetos/projetos';
import Rodape from '../../components/rodape/rodape';


function PaginaInicial() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="perfil">
        <div>
          <h1>Julia</h1>
          <p>Estudante de Ciência da computação (UFSJ) |</p>
          <p>Desenvolvedora em formação</p>
        </div>
        <img 
          src={require('./perfil-julia.png')} 
          alt="perfil" 
          className="profile-img" 
        />
      </div>
                    <div className='habilidades'>
                        <Habilidades></Habilidades>
                    </div>
                    <div className='Projetos'>
                        <Projetos></Projetos>
                    </div>
                    <div className='rodape'>
                        <Rodape></Rodape>
                    </div>
    </div>
  );
}

export default PaginaInicial;
