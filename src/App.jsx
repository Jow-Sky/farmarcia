import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Atendimento from './components/Atendimento';
import Footer from './components/Footer';
import './App.css';  // Importando os estilos específicos

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Atendimento />
      <Footer />
    </div>
  );
};

export default App;
