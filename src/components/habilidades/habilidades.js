import React from 'react';
import './habilidades.css'

function Habilidades(){
    return(
        <div>
            <div className='habilidades'>
                <h1 className='logo-hab'>Habilidades</h1>

                <div className='linguagens'>
                    <ul>
                        <li><p className='nome-hab'><img src={require('./python-rosa.png')} alt="python" className='python'/></p></li>
                        <li><p className='nome-hab'>HTML</p></li>
                        <li><p className='nome-hab'>C</p></li>
                        <li><p className='nome-hab'><img src={require('./figma-rosa.png')} alt="figma" className='figma'/></p></li>
                        <li><p className='nome-hab'>NODE</p></li>
                        <li> <p className='nome-hab'>CSS</p></li>
                        <li><p className='nome-hab'><img src={require('./react-rosa.png')} alt="react" className='react'/></p></li>
                        <li> <p className='nome-hab'>JS</p></li>
                        <li><p className='nome-hab'>SQL</p></li>
                        <li><p className='nome-hab'><img src={require('./git-rosa.png')} alt="git" className='git'/></p></li>
                       
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Habilidades;