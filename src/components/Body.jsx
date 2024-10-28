import React from 'react';
import { GrAdd } from "react-icons/gr";
const Home = () => {
  return (
    <div class="home">
      <div class="coluna">
      <h2>Nova Direção</h2>
        <p>Nossa farmácia está sob nova direção.</p>
        <p>Venha conferir as novidades e aproveite a inauguração!</p>
        <GrAdd />
      </div>
      
      <div class="coluna">
        <h2>Inauguração</h2>
        <p>Participe da inauguração no dia 01 de dezembro de 2024.</p>
        <p>Ofertas especiais e muito mais!</p>
        <GrAdd />
      </div>
      
    </div>
    
  );
} 

export default Home;
