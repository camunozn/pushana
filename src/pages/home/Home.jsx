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
    element: 'section-consulting',
  };

  // SERVICE CONSULTING DETAILS
  const headingConsulting = {
    title: 'Ingeniería y Consultoría',
    text: 'En procesos de la gestión de proyectos',
  };

  const featuresConsulting = [
    {
      featureName: '1',
      featureIntro: {
        title: {
          start: 'Procesos de la gestión de proyectos:',
          middle: 'implementación y optimización',
          end: 'en empresas constructoras.',
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
          start: 'Precontractual:',
          middle: 'licitaciones y cotizaciones',
          end: 'para clientes públicos o privados.',
        },
        text: 'Te apoyamos en la elaboración de licitaciones y cotizaciones. Realizamos el análisis económico de tu oferta, nos enfocamos en determinar presupuesto, análisis de precios unitarios, cronograma y uso de recursos.',
        image: imagesArray.imgBidAlt,
        accent: 'secondary',
      },
      featureLink: '/contact',
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
      featureLink: '/contact',
    },
  ];

  // SERVICE DEVELOPMENT DETAILS
  const headingDevelopment = {
    title: 'Ingeniería y Consultoría',
    text: 'En procesos de la gestión de proyectos',
  };

  const featuresDevelopment = [
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
      featureLink: '/contact',
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
      featureLink: '/contact',
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
      featureLink: '/contact',
    },
  ];

  // SERVICE TRAINING DETAILS
  const headingTraining = {
    title: 'Ingeniería y Consultoría',
    text: 'En procesos de la gestión de proyectos',
  };

  const featuresTraining = [
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
      featureLink: '/contact',
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
      featureLink: '/contact',
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
      <Services
        id="section-consulting"
        heading={headingConsulting}
        features={featuresConsulting}
        background="dark"
      />
      <Services
        id="section-development"
        heading={headingDevelopment}
        features={featuresDevelopment}
        background="dark"
      />
      <Services
        id="section-training"
        heading={headingTraining}
        features={featuresTraining}
        background="dark"
      />
    </div>
  );
};

export default Home;
