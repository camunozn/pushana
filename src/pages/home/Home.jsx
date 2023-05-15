import React from 'react';
import styles from './Home.module.css';
import Hero from '../../modules/section-hero/Hero';
import Introduction from '../../modules/section-intro/Introduction';
import Explore from '../../modules/section-explore/Explore';
import imagesArray from '../../assets';
import Product from '../../modules/section-product/Product';

const Home = () => {
  //HERO CONTENT
  const headingHero = {
    start: 'Gestión de proyectos',
    middle: 'de construcción',
    end: 'hecha',
    text: 'Simplifica la planificación, potencia el control, evita reprocesos, haz que la información fluya y en general, mejora el desempeño de tus proyectos.',
    image: imagesArray.imgHero,
  };

  const sequenceWords = [
    'fácil',
    1000,
    'eficiente',
    1000,
    'clara',
    1000,
    'accesible',
    1000,
    'efectiva',
    1000,
  ];

  const primaryBtnOptions = {
    text: 'Contáctenos',
    style: 'primary',
    align: 'center',
    type: 'page',
    element: '/',
  };

  const secondaryBtnOptions = {
    text: 'Descubre más',
    style: 'secondary',
    align: 'center',
    type: 'section',
    element: 'section-introduction',
  };

  // INTRO SERVICES CONTENT
  const headingIntroServices = {
    title:
      'Potenciamos los procesos de planificación y control de tus proyectos de construcción.',
    text: 'Impulsamos la gestión de tus proyectos a través de servicios de consultoría especializados y soluciones de software intuitivas que generan resultados. Además, tenemos una gran comunidad en la que te puedes apoyar!',
  };

  const cardsListIntroServices = [
    {
      icon: 'fa-regular fa-compass',
      title: 'Pushana Consulting',
      style: 'primary',
      type: 'page',
      element: '/consulting',
    },
    {
      icon: 'fa-solid fa-laptop-code',
      title: 'Pushana CPMS',
      style: 'primary',
      type: 'page',
      element: '/software',
    },
    {
      icon: 'fa-solid fa-people-group',
      title: 'Comunidad Pushana',
      style: 'primary',
      type: 'page',
      element: '/community',
    },
  ];

  // EXPLORE MORE CONTENT
  const headingExplore = {
    title: 'Explora más: sobre nosotros, comunidad y blog',
    text: 'Conoce más sobre nosotros, apóyate en nuestra comunidad o descubre nuestro blog.',
  };

  const cardsListExplore = [
    {
      icon: 'fa-solid fa-dna',
      title: 'Sobre nosotros',
      style: 'primary',
    },
    {
      icon: 'fa-solid fa-people-group',
      title: 'Comunidad Pushana',
      style: 'primary',
    },
    {
      icon: 'fa-solid fa-blog',
      title: 'Pushana Blog',
      style: 'primary',
    },
  ];

  return (
    <div className={styles.home}>
      <Hero
        heading={headingHero}
        sequenceWords={sequenceWords}
        primaryBtnOptions={primaryBtnOptions}
        secondaryBtnOptions={secondaryBtnOptions}
      />
      <Introduction
        id="section-introduction"
        heading={headingIntroServices}
        cardsList={cardsListIntroServices}
      />
      <Explore heading={headingExplore} cardsList={cardsListExplore} />
    </div>
  );
};

export default Home;
