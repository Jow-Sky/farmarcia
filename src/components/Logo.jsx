import React from 'react';
import logo from '../assets/logo.png';  // Importando a logo

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo da Farmácia" />
    </div>
  );
};

export default Logo;
