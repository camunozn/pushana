import React from 'react';
import styles from './Home.module.css';
import Hero from '../../modules/section-hero/Hero';
import Introduction from '../../modules/section-intro/Introduction';
import Explore from '../../modules/section-explore/Explore';
import Services from '../../modules/section-services/Services';
import imagesArray from '../../assets';

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
  const headingIntro = {
    title:
      'Potenciamos los procesos de planificación y control de tus proyectos de construcción.',
    text: 'Impulsamos la gestión de tus proyectos a través de servicios de consultoría especializados y soluciones de software intuitivas que generan resultados. Además, tenemos una gran comunidad en la que te puedes apoyar!',
  };

  const cardsListIntro = [
    {
      icon: 'fa-regular fa-compass',
      title: 'Pushana Consulting',
      style: 'primary',
      type: 'page',
      element: '/consulting',
    },
    {
      icon: 'fa-solid fa-laptop-code',
      title: 'CPM Software',
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

  // SERVICES AND PRODUCTS DETAILS CONTENT
  const headingServices = {
    title: 'Desde el diseño hasta el final de la construcción.',
    text: 'Te acompañamos en las principales etapas de tu proyecto. Somos tu aliado en cada paso del camino.',
  };

  const featuresServices = [
    {
      featureName: '1',
      featureIntro: {
        title: {
          start: 'Diseño:',
          middle: 'ingeniería de costos',
          end: 'para la evaluación económica de proyectos.',
        },
        text: 'Si eres el promotor de un proyecto de construcción o el consultor de los diseños finales, nosotros te apoyamos con la ingeniería de costos y la evaluación económica del proyecto de cara a una construcción exitosa.',
        image: imagesArray.imgCostEng,
        accent: 'primary',
      },
      featureLink: '/consulting',
    },
    {
      featureName: '2',
      featureIntro: {
        title: {
          start: 'Precontractual:',
          middle: 'licitaciones y cotizaciones',
          end: 'para clientes públicos o privados.',
        },
        text: 'Te apoyamos en la elaboración de licitaciones y cotizaciones. Realizamos el análisis económico de tu oferta, nos enfocamos en determinar presupuesto, análisis de precios unitarios, cronograma y uso de recursos.',
        image: imagesArray.imgBidAlt,
        accent: 'secondary',
      },
      featureLink: '/consulting',
    },
    {
      featureName: '3',
      featureIntro: {
        title: {
          start: 'Preconstrucción:',
          middle: 'planificación detallada',
          end: 'para prepararte de la mejor manera.',
        },
        text: 'De la licitación al inicio de la construcción sin problemas. Revisamos el alcance, realizamos el presupuesto meta, ajustamos la programación y preparamos toda la información que necesitas para empezar la ejecución.',
        image: imagesArray.imgPlanning,
        accent: 'primary',
      },
      featureLink: '/consulting',
    },
    {
      featureName: '4',
      featureIntro: {
        title: {
          start: 'Construcción:',
          middle: 'monitoreo y control',
          end: 'para una ejecución con conciencia.',
        },
        text: 'Simplificamos los procesos de registro y análisis de la información campo para mantener los reportes sobre el desempeño de tu proyecto actualizados en todo momento y permitir la toma de decisiones basada en datos.',
        image: imagesArray.imgControlAlt,
        accent: 'secondary',
      },
      featureLink: '/consulting',
    },
    {
      featureName: '5',
      featureIntro: {
        title: {
          start: 'Automatización:',
          middle: 'desarrollo low-code',
          end: 'para mejorar la eficiencia de tus procesos.',
        },
        text: 'Desarrollamos soluciones low-code con las mejores plataformas disponibles, para optimizar los procesos críticos de la gestión de tus proyectos de forma rápida y ágil. Ideal para soluciones personalizadas a bajo costo.',
        image: imagesArray.imgLowCode,
        accent: 'primary',
      },
      featureLink: '/consulting',
    },
    {
      featureName: '6',
      featureIntro: {
        title: {
          start: 'Software:',
          middle: 'solución integral',
          end: 'para la gestión de tus proyectos de construcción.',
        },
        text: 'Ofrecemos una aplicación para la gestión integral de proyectos de construcción, desde la etapa precontractual hasta el cierre del proyecto. Nuestra aplicación está basada en los procesos y las buenas prácticas que hemos desarrollado a lo largo de los años con resultados comprobados.',
        image: imagesArray.imgAppAlt,
        accent: 'secondary',
      },
      featureLink: '/software',
    },
  ];

  // EXPLORE MORE CONTENT
  const headingExplore = {
    title: 'Explora más sobre nuestra comunidad, blog o nosotros',
    text: 'Apóyate en nuestra comunidad, descubre nuestro blog o conoce más sobre nosotros.',
  };

  const cardsListExplore = [
    {
      icon: 'fa-solid fa-people-group',
      title: 'Comunidad Pushana',
      style: 'primary',
      type: 'page',
      element: '/community',
    },
    {
      icon: 'fa-solid fa-blog',
      title: 'Pushana Blog',
      style: 'primary',
      type: 'page',
      element: '/blog',
    },
    {
      icon: 'fa-solid fa-dna',
      title: 'Sobre nosotros',
      style: 'primary',
      type: 'page',
      element: '/about',
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
        heading={headingIntro}
        cardsList={cardsListIntro}
      />
      <Services
        id="section-services"
        heading={headingServices}
        features={featuresServices}
      />
      <Explore heading={headingExplore} cardsList={cardsListExplore} />
    </div>
  );
};

export default Home;
