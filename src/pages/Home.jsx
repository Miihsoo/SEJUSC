import React from 'react';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import Categories from '../components/Categories';
import CourseCard from '../components/CourseCard';
import Motivacional from '../components/MotivacionalSection';
import Footer from '../components/Footer';
import '../styles/homepage.css';
import Course4 from "../assets/anydesk.png";
import Course2 from "../assets/gestao.jpg";
import Course1 from "../assets/backend-python.jpg";
import Course3 from "../assets/redes.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <HeroCarousel />

      <section className="categorias">
        <div className="container">
          <Categories />
        </div>
      </section>

      <section className="cursos">
        <div className="container">
          <h2>Cursos Rápidos e Fáceis</h2>
          <div className="grid-cursos">
            <CourseCard
              imgSrc={Course1}
              title="Back-end em Python"
              description="Informática • 20h"
              link="#"
            />
            <CourseCard
              imgSrc={Course2}
              title="Gestão de Negócios"
              description="Administração • 10h"
              link="#"
            />
            <CourseCard
              imgSrc={Course3}
              title="Redes do zero"
              description="Redes • 45h"
              link="#"
            />
            <CourseCard
              imgSrc={Course4}
              title="Como instalar o Anydesk"
              description="Tutorial • 10min"
              link="#"
            />
          </div>
        </div>
      </section>

      <Motivacional />
      <Footer />
    </>
  );
}