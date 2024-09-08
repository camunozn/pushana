import React from 'react';
import styles from './Home.module.css';
import Hero from '../../components/organisms/hero/Hero';
import FeatureBox from '../../components/molecules/feature-box/FeatureBox';
import HeadingMedium from '../../components/atoms/heading-medium/HeadingMedium';
import imagesArray from '../../assets';

const Home = () => {
  //HERO CONTENT
  const sectionBg = 'dark';

  const headingHero = {
    start: 'Gestión de proyectos ',
    middle: 'de construcción ',
    end: 'hecha ',
    text: 'Implementamos y optimizamos procesos, desarrollamos soluciones a medida, capacitamos equipos de trabajo... Todo para mejorar el desempeño de tus proyectos.',
    image: imagesArray.imgHeroGif,
  };

  const sequenceWords = [
    'simple',
    1000,
    'efectiva',
    1000,
    'eficiente',
    1000,
    'clara',
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
    text: 'Ver más',
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
          end: 'en la industria de la construcción.',
        },
        text: 'Te ayudamos a implementar y optimizar los procesos, aplicando las mejores prácticas de gestión de proyectos en tu empresa u organización. Nos orientamos específicamente a satisfacer las necesidades de la industria de la construcción.',
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
    text: 'PMOs, licitaciones y transformación digital',
  };

  const featuresTraining = [
    {
      featureName: '1',
      featureIntro: {
        title: {
          start: 'Formación y desarrollo de',
          middle: 'oficinas de gestión de proyectos',
          end: 'en empresas constructoras.',
        },
        text: 'Te ayudamos a establecer tu oficina de gestión de proyectos y desarrollar a tu equipo de trabajo. Ya sea en una o todas las áreas de conocimiento de la gestión de proyectos, desde las más básicas como la gestión del alcance, costos, cronograma y calidad; hasta las más complejas como la gestión de riesgos, las comunicaciones y los interesados.',
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
          start: 'Formación de equipos',
          middle: 'de transformación digital',
          end: 'para la innovación y el desarrollo empresarial.',
        },
        text: 'No solo te ofrecemos soluciones en gestión de proyectos, también capacitamos a tu personal para formar equipos de transformación digital que se encarguen de promover la innovación al interior de tu empresa, generando iniciativas como la automatización de procesos, el análisis de datos, la inteligencia de negocios o cualquier otra que aporte al desarrollo empresarial.',
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
      <section
        className={`${styles['section__services']} ${`bg--${sectionBg}`}`}
      >
        <div id="service-consulting" className={styles['service__container']}>
          <HeadingMedium
            title={headingConsulting.title}
            text={headingConsulting.text}
          />
          <FeatureBox features={featuresConsulting} background={sectionBg} />
        </div>
        <div id="service-development" className={styles['service__container']}>
          <HeadingMedium
            title={headingDevelopment.title}
            text={headingDevelopment.text}
          />
          <FeatureBox features={featuresDevelopment} background={sectionBg} />
        </div>
        <div id="service-training" className={styles['service__container']}>
          <HeadingMedium
            title={headingTraining.title}
            text={headingTraining.text}
          />
          <FeatureBox features={featuresTraining} background={sectionBg} />
        </div>
      </section>
    </div>
  );
};

export default Home;
