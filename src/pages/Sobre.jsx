import React from 'react';
import Header from '../components/Header';
import Motivacional from '../components/MotivacionalSection';
import Footer from '../components/Footer';
import '../styles/Sobre.css';

export default function Sobre() {
  return (
    <>
      <Header />

       <div class="container">
    <div class="sobre">
      <h1>Sobre o SICAD</h1>
      <p>O SICAD (Sistema Integrado de Capacitação e Desenvolvimento) é uma plataforma da SEJUSC, desenvolvida pelo setor de GTI (Gerência de Tecnologia da Informação), com o objetivo de oferecer cursos e ações de capacitação para servidores, colaboradores e público interessado.
Nosso compromisso é promover o aprimoramento contínuo por meio de conteúdos acessíveis, atualizados e alinhados às demandas da gestão pública e ao desenvolvimento profissional.</p>

    </div>
    </div>

      <Motivacional />
      <Footer />
    </>
  );
}