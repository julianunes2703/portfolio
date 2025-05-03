import React from 'react';
import './meusProjetos.css';
import Header from '../../components/header/header';
import Rodape from '../../components/rodape/rodape';

function MeusProjetos(){
    return(
        <div>
            <div className='header'>
                <Header></Header>
            </div>
        <div className="meus-projetos">
  <h1>Meus Projetos</h1>
  

  <div className="project-cards">
    <div className="card">
      <img src={require('./churrascometro.png')} alt="Churrascometro" />
      <h3>Churrascômetro</h3>
      <p>O Churrascometro é uma aplicação simples e prática para calcular a quantidade de carne, cerveja e bebidas
         necessárias para um churrasco, com base no número de adultos, crianças e a duração do evento. A aplicação 
         foi desenvolvida como parte do aprendizado no 
        curso de Desenvolvimento Web do Programador BR utilizando JavaScript, HTML e CSS.</p>
     
    </div>
                    <div className="card">
                                <img src={require('./liftly.png')} alt="Liftly" />
                                <h3>Liftly</h3>
                                <p>O Liftly é um aplicativo de academia em desenvolvimento, que oferece planos personalizados de treino e 
                                    dieta, permite agendamentos de aulas e interação com personal trainers e nutricionistas. 
                                    A plataforma também conta com um marketplace onde profissionais podem oferecer seus serviços.
                                As tecnologias utilizadas no desenvolvimento são React, JavaScript, Node.js, MongoDB, PostgreSQL, HTML e
                                CSS.
                                O foco é proporcionar uma experiência integrada para alcançar objetivos de saúde e bem-estar.</p>
                    </div>
        </div>
    </div>
        <div className='rodape'>
            <Rodape></Rodape>
        </div>
</div>

    )
}

export default MeusProjetos;
