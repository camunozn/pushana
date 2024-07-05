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
    text: 'Implementamos y optimizamos tus procesos, desarrollamos soluciones a medida, y capacitamos a tu equipo... Todo para mejorar el desempeño de tus proyectos.',
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
      featureLink: '/contact',
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
      featureLink: '/contact',
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
        heading={headingServices}
        features={featuresServices}
        background="dark"
      />
      <Services
        id="section-development"
        heading={headingServices}
        features={featuresServices}
        background="dark"
      />
      <Services
        id="section-training"
        heading={headingServices}
        features={featuresServices}
        background="dark"
      />
    </div>
  );
};

export default Home;
