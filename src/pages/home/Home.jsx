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
    image: imagesArray.imgHeroGif,
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
          start: 'Implementamos y optimizamos los',
          middle: 'procesos de la gestión de proyectos',
          end: 'en empresas constructoras e inmobiliarias.',
        },
        text: 'Te ayudamos a implementar y optimizar los procesos y buenas prácticas de la gestión de proyectos en tu empresa. Orientados específicamente para satisfacer las necesidades de la industria de la construcción.',
        image: imagesArray.imgProcess,
        accent: 'primary',
      },
      featureLink: '/contact',
    },
    {
      featureName: '2',
      featureIntro: {
        title: {
          start: 'Planificación de proyectos:',
          middle: 'alcance, costos y tiempos,',
          end: 'nos encargamos de las principales restricciones.',
        },
        text: 'Te apoyamos con la planificación de las principales restricciones de tus proyectos: alcance, costos y tiempos. Planificamos la gestión del alcance, analizamos el presupuesto de construcción y desarrollamos el cronograma de trabajo de tu proyecto.',
        image: imagesArray.imgPlanningAlt,
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
        image: imagesArray.imgControl,
        accent: 'primary',
      },
      featureLink: '/contact',
    },
  ];

  // SERVICE DEVELOPMENT DETAILS
  const headingDevelopment = {
    title: 'Soluciones innovadoras',
    text: 'Desarrollo de soluciones a medida',
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
        text: 'No adaptes tu empresa ni tus procesos para que encajen con una aplicación predeterminada, en su lugar, crea aplicaciones rápidamente y a la medida de tus necesidades con la plataforma Claris FileMaker Pro. Nosotros te ofrecemos los paquetes de licencias y el servicio de desarrollo para brindarte una solución integral a tus problemas.',
        image: imagesArray.imgLowCode,
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
        text: 'Desarrollamos y personalizamos aplicaciones que optimizan los procesos y mejoran la operación de tu empresa. Nuestras soluciones te ayudan a ejecutar procesos y administrar recursos de forma efectiva y eficiente, enfocadas específicamente a la industria de la construcción, te ayudamos a mejorar la rentabilidad de tus proyectos.',
        image: imagesArray.imgOpsAlt,
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
        text: 'Manejar el inventario de obra, controlar horas-hombre y horas-máquina, optimizar el proceso de compras, mejorar la gestión documental, desarrollar presupuestos de construcción, aplicar la gestión del valor ganado... Lo que necesites para mejorar la gestión de tus proyectos, nosotros lo desarrollamos con Claris FileMaker Pro.',
        image: imagesArray.imgApp,
        accent: 'primary',
      },
      featureLink: '/contact',
    },
  ];

  // SERVICE TRAINING DETAILS
  const headingTraining = {
    title: 'Formación de equipos',
    text: 'PMOs, licitaciones e innovación',
  };

  const featuresTraining = [
    {
      featureName: '1',
      featureIntro: {
        title: {
          start: 'Formación y desarrollo de',
          middle: 'oficinas de gestión de proyectos',
          end: 'en empresas.',
        },
        text: 'Te ayudamos a establecer y capacitar todos los tipo de oficinas de gestión de proyectos: PMOs de Soporte con funciones meramente consultativas, PMOs de Control encargadas del cumplimiento de los procesos y la evaluación y reporte del desempeño de los proyectos, o PMOs Directivas encargadas totalmente de la gestión de los proyectos.',
        image: imagesArray.imgOffice,
        accent: 'primary',
      },
      featureLink: '/contact',
    },
    {
      featureName: '2',
      featureIntro: {
        title: {
          start: 'Capacitación de',
          middle: 'equipos de licitaciones',
          end: 'para ganar más y mejores contratos.',
        },
        text: 'Si necesitas potenciar tu equipo de licitaciones o estás formando un equipo de trabajo ganador, nosotros te apoyamos con la transferencia de conocimiento y el desarrollo de habilidades en temas como ingeniería de costos, evaluación financiera de proyectos, programación de obra, diagramas espacio-tiempo y más.',
        image: imagesArray.imgTrainingAlt,
        accent: 'secondary',
      },
      featureLink: '/contact',
    },
    {
      featureName: '3',
      featureIntro: {
        title: {
          start: 'Formación de',
          middle: 'equipos de innovación',
          end: 'para desarrollar y mantener aplicativos.',
        },
        text: 'No solo te ofrecemos licencias y desarrollo rápido de aplicaciones personalizadas con la plataforma Claris FileMaker Pro, también podemos capacitar a tu personal para formar un equipo de innovación al interior de tu empresa, que se encargue de mantener los aplicativos desarrollados y, porque no, crear nuevas soluciones innovadoras.',
        image: imagesArray.imgLowCode,
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
