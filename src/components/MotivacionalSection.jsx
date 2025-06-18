import React from 'react';
import '../styles/Motivacional.css';
import '../styles/homepage.css';

export default function Motivacional() {
  return (
    <section className="motivacional">
      <div className="container motivacional-content">
        <div>
          <h2>Continue estudando!</h2>
          <p>Não desista! Aprender é um processo.</p>
          <a href="#">
            <button>Saiba Mais</button>
          </a>
        </div>
        <img
          src="../assets/Indice-sejusc.png"
         
        />
      </div>
    </section>
  );
}
