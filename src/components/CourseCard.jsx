import React from 'react';
import '../styles/CourseCard.css';
import '../styles/homepage.css';


export default function CourseCard() {
  return (
    
    <div className="card">
      <a href="#">
        <img
          src="#"
          alt="Curso"
        />
        <h3>Back-end em Python</h3>
        <p>Informática • 20h</p>
      </a>
    </div>
  );
}
