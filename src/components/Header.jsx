import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#atendimento">Atendimento</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
