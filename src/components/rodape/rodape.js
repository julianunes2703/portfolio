import React from "react";
import './rodape.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Rodape(){
    return(
        <div className="rodape">
            <div className="rodape-content">
        <div className="logo-rodape">
          <h1>Me siga</h1> 
        </div>
        <div className="me-siga">
            <a href="https://github.com/julianunes2703" target="_blank" rel="noopener noreferrer">
                <i className="github"> <FaGithub></FaGithub></i>
            </a>
            <a href="https://www.linkedin.com/in/julia-nunes-a50674217/" target="_blank" rel="noopener noreferrer">
                <i className="linkedin"> <FaLinkedin></FaLinkedin></i>
            </a>
        </div>

      </div>
        </div>
    )
}

export default Rodape;