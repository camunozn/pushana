import React from 'react';
import styles from './Home.module.css';
import Hero from '../../modules/section-hero/Hero';
import Services from '../../modules/section-services/Services';
import imagesArray from '../../assets';

const Home = () => {
  //HERO CONTENT
  const headingHero = {
    start: 'Gestión de proyectos',
    middle: 'de construcción',
    end: 'hecha',
    text: 'Implementamos y optimizamos procesos, desarrollamos soluciones a medida, capacitamos equipos de trabajo... Todo para mejorar el desempeño de tus proyectos.',
    image: imagesArray.imgHero,
  };

  const sequenceWords = [
    'simple',
    1000,
    'clara',
    1000,
    'eficiente',
    1000,
    'efectiva',
    1000,
  ];

  const primaryBtnOptions = {
    text: 'Contáctenos',
    style: 'primary',
    align: 'center',
    type: 'page',
    element: '/contact',
  };

  const secondaryBtnOptions = {
    text: 'Descubre más',
    style: 'secondary',
    align: 'center',
    type: 'section',
    element: 'service-consulting',
  };

  // SERVICE CONSULTING DETAILS
  const headingConsulting = {
    title: 'Gestión de proyectos',
    text: 'Procesos, planificación y control',
  };

  const featuresConsulting = [
    {
      featureName: '1',
      featureIntro: {
        title: {
          start: 'Implementación y optimización de los',
          middle: 'procesos de la gestión de proyectos',
          end: 'en empresas constructoras.',
        },
        text: 'Te ayudamos a implementar y optimizar los procesos y buenas prácticas de la gestión de proyectos en tu empresa. Orientados específicamente para satisfacer las necesidades de la industria de la construcción.',
        image: imagesArray.imgCostEng,
        accent: 'primary',
      },
      featureLink: '/contact',
    },
    {
      featureName: '2',
      featureIntro: {
        title: {
          start: 'Planificación de proyectos.',
          middle: 'Alcance, costos y tiempos,',
          end: 'las principales restricciones.',
        },
        text: 'Te apoyamos con la planificación de las principales restricciones de tus proyectos: alcance, costos y tiempos. Planificamos la gestión del alcance, analizamos el presupuesto de construcción y desarrollamos el cronograma de trabajo.',
        image: imagesArray.imgBidAlt,
        accent: 'secondary',
      },
      featureLink: '/contact',
    },
    {
      featureName: '3',
      featureIntro: {
        title: {
          start: 'Monitoreo y control de proyectos:',
          middle: 'monitorea lo que quieres controlar,',
          end: 'controla lo que importa.',
        },
        text: 'Te ayudamos a implementar y aplicar la gestión del valor ganado para el control de tus proyectos. Realizamos el control integrado de cambios y llevamos el control de costos y de cronograma para evaluar el desempeño de tus proyectos.',
        image: imagesArray.imgPlanning,
        accent: 'primary',
      },
      featureLink: '/contact',
    },
  ];

  // SERVICE DEVELOPMENT DETAILS
  const headingDevelopment = {
    title: 'Claris FileMaker®',
    text: 'Soluciones rápidas y a medida',
  };

  const featuresDevelopment = [
    {
      featureName: '1',
      featureIntro: {
        title: {
          start: 'Claris FileMaker®:',
          middle: 'desarrollo rápido',
          end: 'de aplicaciones personalizadas.',
        },
        text: 'No adaptes tu empresa y tus procesos para que encajen con una solución predeterminada, en su lugar, crea soluciones rápidamente y a la medida de tus necesidades con la plataforma Claris FileMaker Pro 2024.',
        image: imagesArray.imgCostEng,
        accent: 'primary',
      },
      featureLink: '/contact',
    },
    {
      featureName: '2',
      featureIntro: {
        title: {
          start: 'Claris FileMaker®:',
          middle: 'aplicaciones operativas',
          end: 'para empresas constructoras.',
        },
        text: 'Desarrollamos y personalizamos aplicaciones que optimicen los procesos y mejoren la operación de tu empresa constructora. Aplicaciones que te ayuden a ejecutar los procesos y administrar los recursos de forma efectiva y eficiente.',
        image: imagesArray.imgBidAlt,
        accent: 'secondary',
      },
      featureLink: '/contact',
    },
    {
      featureName: '3',
      featureIntro: {
        title: {
          start: 'Claris FileMaker®:',
          middle: 'soluciones útiles y confiables',
          end: 'para resolver cualquier problema.',
        },
        text: 'Ya sea que necesites una solución para manejar el inventario de tus obras, controlar horas-hombre y horas-máquina, optimizar el proceso de compras, desarrollar presupuestos de construcción, mejorar la gestión documental, aplicar la gestión del valor ganado, o lo que sea que se te ocurra para mejorar la gestión de tus proyectos; nosotros lo desarrollamos.',
        image: imagesArray.imgPlanning,
        accent: 'primary',
      },
      featureLink: '/contact',
    },
  ];

  // SERVICE TRAINING DETAILS
  const headingTraining = {
    title: 'Capacitaciones',
    text: 'Equipos de ingeniería y PMOs',
  };

  const featuresTraining = [
    {
      featureName: '1',
      featureIntro: {
        title: {
          start: 'Capacitación y desarrollo de',
          middle: 'equipos de licitaciones',
          end: 'para ganar más y mejores contratos.',
        },
        text: 'Si eres el promotor de un proyecto de construcción o el consultor de los diseños finales, nosotros te apoyamos con la ingeniería de costos y la evaluación económica del proyecto de cara a una construcción exitosa.',
        image: imagesArray.imgCostEng,
        accent: 'primary',
      },
      featureLink: '/contact',
    },
    {
      featureName: '2',
      featureIntro: {
        title: {
          start: 'Implementación y capacitación de',
          middle: 'oficinas de gestión de proyectos',
          end: 'en empresas constructoras.',
        },
        text: 'Te apoyamos en la elaboración de licitaciones y cotizaciones. Realizamos el análisis económico de tu oferta, nos enfocamos en determinar presupuesto, análisis de precios unitarios, cronograma y uso de recursos.',
        image: imagesArray.imgBidAlt,
        accent: 'secondary',
      },
      featureLink: '/contact',
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
      <div className={`${styles['section-services']} ${'bg--dark'}`}>
        <Services
          id="service-consulting"
          heading={headingConsulting}
          features={featuresConsulting}
          background="dark"
        />
        <Services
          id="service-development"
          heading={headingDevelopment}
          features={featuresDevelopment}
          background="dark"
        />
        <Services
          id="service-training"
          heading={headingTraining}
          features={featuresTraining}
          background="dark"
        />
      </div>
    </div>
  );
};

export default Home;
