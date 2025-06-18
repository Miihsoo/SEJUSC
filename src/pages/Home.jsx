import React from 'react';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import Categories from '../components/Categories';
import CourseCard from '../components/CourseCard';
import Motivacional from '../components/MotivacionalSection';
import Footer from '../components/Footer';
import '../styles/homepage.css';

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
              imgSrc="/Site Pagina Inicial 2.0//Images/plano-de-fundo-de-programacao-com-pessoa-trabalhando-com-codigos-no-computador.jpg"
              title="Back-end em Python"
              description="Informática • 20h"
              link="/Site Pagina Inicial 2.0/Site%20curso/CoursePage/CursepageBackend/indexpy.html"
            />
            <CourseCard
              imgSrc="/Site Pagina Inicial 2.0//Images/assinatura-de-mulheres-empresariais-no-documento.jpg"
              title="Gestão de Negócios"
              description="Administração • 10h"
              link="/Site Pagina Inicial 2.0/Site curso/CoursePage/CursepageGestão/Gestão.html"
            />
            <CourseCard
              imgSrc="/Site Pagina Inicial 2.0//Images/empregados-trabalhando-juntos-vista-lateral.jpg"
              title="Redes do zero"
              description="Redes • 45h"
              link="/Site Pagina Inicial 2.0/Site curso/CoursePage/CursepageRedes/Redes.html"
            />
            <CourseCard
              imgSrc="/Site Pagina Inicial 2.0//Images/download.png"
              title="Como instalar o Anydesk"
              description="Tutorial • 10min"
              link="/Site Pagina Inicial 2.0/Site curso/CoursePage/CursopageANYdesk/index3.html"
            />
          </div>
        </div>
      </section>

      <Motivacional />
      <Footer />
    </>
  );
}