import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaInicial from './pages/paginaInicial/paginaInicial';
import Contato from './pages/contato/contato';
import MeusProjetos from './pages/paginaProjetos/meusProjetos';
import Sobre from './pages/sobre/sobre';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path='/contato' element={<Contato></Contato>}/>
        <Route path='/meusprojetos' element={<MeusProjetos></MeusProjetos>}/>
        <Route path='/sobre' element={<Sobre></Sobre>} />
      </Routes>
    </Router>
  );
}

export default App;
