import React from 'react';
import './sobre.css';
import Header from '../../components/header/header';
import Rodape from '../../components/rodape/rodape';

function Sobre(){
    return(
        <div>
            <div className='header'>
                <Header></Header>
            </div>
                <h1 className='logo-sobre'>Sobre</h1>
         <div class="sobre-container">
                
                <section class="competencias">
                    <h2>Competências</h2>
                    <ul>
                        <li>Trabalho em grupo </li>
                        <li>Organizada </li>
                        <li>Responsável </li>
                    </ul>
                </section>
                <section class="competencias">
                    <h2>Cursos</h2>
                    <ul>
                        <li>Introdução a banco de dados e SQL (IFSP) </li>
                        <li>Curso de desenvolvimento web full stack |JavaScript | React | MongoDB | Node (Programador BR)</li>
                    </ul>
                </section>
                <section class="competencias">
                    <h2>Esperiências Acadêmicas</h2>
                    <ul>
                        <li>Projeto de Extensão - Universidade Federal de São João del-Rei -
                            Desenvolvimento de uma solução digital utilizando a plataforma no-code Medusa para auxiliar mulheres artesãs na criação de lojas
                            virtuais e comercialização de seus produtos de forma autônoma.</li>
                    </ul>
                </section>

                </div>
                <div className='rodape'>
                    <Rodape></Rodape>
                </div>

        </div>
    )
}

export default Sobre;