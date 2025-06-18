import React from 'react';
import '../styles/Categories.css';

const categories = ['Curso TI', 'Tutoriais', 'Adm', 'Rede', 'Fiscalização', 'Outros'];

const Categories = () => (
  <section className="categorias container">
    <div className="categorias-header">
      <h2>Categorias</h2>
      <a href="#" className="ver-todas">Ver Todas as Categorias</a>
    </div>
    <div className="botoes-categorias">
      {categories.map((category, index) => (
        <div key={index} className="categoria-card">
          <span>{category}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Categories;
