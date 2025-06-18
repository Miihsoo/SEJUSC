import React from 'react';
import '../styles/Categories.css';

const categories = ['Administração', 'Tecnologia', 'Educação', 'Dados', 'Redes'];

const Categories = () => (
  <section className="categorias container">
    <h2>Categorias</h2>
    <div className="botoes-categorias">
      {categories.map((category, index) => (
        <button key={index}>{category}</button>
      ))}
    </div>
  </section>
);


export default Categories;
