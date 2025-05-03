import React, { useState } from 'react';
import './contato.css'
import Header from '../../components/header/header';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Rodape from '../../components/rodape/rodape';

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar o formulário
    console.log(formData);
  };

  return (
    <div>
        <div className='header'>
            <Header></Header>
        </div>
    <div className="contato">
      <div className="contato-header">
        <h1>Contato</h1>
        <p>Fique à vontade para me enviar uma mensagem ou me conectar nas redes sociais.</p>
      </div>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/julia-nunes-a50674217/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"><FaLinkedin></FaLinkedin></i>
        </a>
        <a href="https://github.com/julianunes2703" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"><FaGithub></FaGithub></i>
        </a>
        <a href="mailto:julianunessouza@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"><MdOutlineMailOutline /></i>
        </a>
      </div>

      <div className="form-container">
        <h2>Fale comigo!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Seu nome"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Seu e-mail"
            required
          />
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Sua mensagem"
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
            <div className='rodape'>
              <Rodape></Rodape>
            </div>
    </div>
  );
}

export default Contato;
