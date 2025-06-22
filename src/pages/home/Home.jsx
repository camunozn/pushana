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
    start: '',
    middle: 'para la industria de la ',
    end: 'construcción: ',
    text: 'Optimizamos tus procesos y mejoramos la operación de tu empresa con soluciones a medida, inteligencia artificial y nuestro software especializado para la gestión de proyectos de construcción. Todo para llevar el desempeño de tus proyectos al siguiente nivel.',
    image: imagesArray.imgHeroGif,
  };

  const sequenceWords = [
    'Transformación digital',
    1000,
    'Soluciones a medida',
    1000,
    'Inteligencia artificial',
    1000,
    'Software especializado',
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
    element: 'section-one',
  };

  // SERVICE CONSULTING DETAILS
  const headingSectionOne = {
    title: 'Software especializado',
    text: 'Solución integral para la gestión de proyectos de construcción',
  };

  const featuresSectionOne = [
    {
      featureName: '1',
      featureIntro: {
        title: {
          start: 'Planifica con precisión ',
          middle: 'el alcance, los costos y los tiempos',
          end: 'en un entorno estructurado y eficiente.',
        },
        text: 'Define de forma clara el alcance, el presupuesto y el cronograma de tu proyecto. Organiza cuentas de control, rubros y clasifica costos directos e indirectos para tener un control detallado desde el inicio.',
        image: imagesArray.imgPlanning,
        accent: 'primary',
      },
      featureLink: '/contact',
    },
    {
      featureName: '2',
      featureIntro: {
        title: {
          start: 'Ejecución sin contratiempos:',
          middle: 'centraliza la información y automatiza procesos',
          end: 'para que la obra avance sin interrupciones.',
        },
        text: 'Gestiona la adquisición de materiales, controla los inventarios y supervisa la contratación de servicios y subcontratos. Optimiza el uso de maquinaria, ya sea propia o alquilada, y organiza a tu equipo de trabajo de forma eficiente. Centraliza toda esta información para garantizar un avance continuo y sin interrupciones.',
        image: imagesArray.imgProcessAlt,
        accent: 'secondary',
      },
      featureLink: '/contact',
    },
    {
      featureName: '3',
      featureIntro: {
        title: {
          start: 'Monitorea y controla en tiempo real:',
          middle: 'aplica la gestión de valor ganado',
          end: 'para decisiones basadas en datos.',
        },
        text: 'Registra el avance físico y controla subcontratos, consumo de materiales, horas hombre y horas máquina. Genera reportes claros y tableros de control interactivos. Aplica la gestión de valor ganado para medir el desempeño y tomar decisiones informadas basadas en datos.',
        image: imagesArray.imgControl,
        accent: 'primary',
      },
      featureLink: '/contact',
    },
  ];

  // SERVICE DEVELOPMENT DETAILS
  const headingSectionTwo = {
    title: 'Desarrollos a medida',
    text: 'Soluciones prácticas para necesidades específicas',
  };

  const featuresSectionTwo = [
    {
      featureName: '1',
      featureIntro: {
        title: {
          start: 'Claris FileMaker®: ',
          middle: 'aplicaciones personalizadas ',
          end: 'para empresas constructoras.',
        },
        text: 'Desarrollamos y personalizamos aplicaciones que optimizan procesos y mejoran la operación de tu empresa. Nuestras soluciones te ayudan a ejecutar tareas y administrar recursos de forma efectiva y eficiente, con un enfoque específico en la industria de la construcción, para maximizar la rentabilidad de tus proyectos.',
        image: imagesArray.imgLowCode,
        accent: 'primary',
      },
      featureLink: '/contact',
    },
    {
      featureName: '2',
      featureIntro: {
        title: {
          start: 'Microsoft® Power Platform: ',
          middle: 'aplicaciones y automatización ',
          end: 'dentro de tu ecosistema Microsoft 365.',
        },
        text: 'Diseñamos y desarrollamos aplicaciones personalizadas utilizando Power Apps y Power Automate. Nuestras soluciones te ayudan a automatizar procesos, conectar sistemas y maximizar la interoperabilidad dentro de tu entorno Microsoft 365, optimizando tu inversión existente con herramientas prácticas, escalables y totalmente integradas.',
        image: imagesArray.imgAppAlt,
        accent: 'secondary',
      },
      featureLink: '/contact',
    },
    {
      featureName: '3',
      featureIntro: {
        title: {
          start: 'Análisis y gestión de datos: ',
          middle: 'información clara',
          end: 'para decisiones inteligentes.',
        },
        text: ' Procesamos y analizamos tus datos usando MS Excel de forma avanzada, creando modelos complejos, automatizando tareas mediante macros y optimizando flujos de trabajo. Conectamos tu información a tableros interactivos y visualizaciones dinámicas en Power BI, para que comprendas y aproveches tus datos a fondo.',
        image: imagesArray.imgOps,
        accent: 'primary',
      },
      featureLink: '/contact',
    },
  ];

  // SERVICE TRAINING DETAILS
  const headingSectionThree = {
    title: 'Inteligencia artificial',
    text: 'Desata el poder de la IA en la construcción',
  };

  const featuresSectionThree = [
    {
      featureName: '1',
      featureIntro: {
        title: {
          start: 'Inteligencia Artificial: ',
          middle: 'impulsa la productividad ',
          end: 'y la precisión en cada proyecto.',
        },
        text: 'Aplicamos inteligencia artificial para analizar grandes volúmenes de datos y detectar patrones que optimizan la planificación, la ejecución y el control de obras. Nuestras soluciones permiten prever desviaciones de cronograma, anticipar necesidades de recursos y mejorar la toma de decisiones con información predictiva. Así, tu empresa reduce riesgos, mejora la productividad y maximiza la eficiencia operativa.',
        image: imagesArray.imgBid,
        accent: 'primary',
      },
      featureLink: '/contact',
    },
    // {
    //   featureName: '2',
    //   featureIntro: {
    //     title: {
    //       start: 'Capacitación de',
    //       middle: 'equipos de licitaciones',
    //       end: 'para ganar más y mejores contratos.',
    //     },
    //     text: 'Si necesitas potenciar tu equipo de licitaciones o estás formando un equipo de trabajo ganador, nosotros te apoyamos con la transferencia de conocimiento y el desarrollo de habilidades en temas como ingeniería de costos, evaluación financiera de proyectos, programación de obra, diagramas espacio-tiempo y más.',
    //     image: imagesArray.imgTrainingAlt,
    //     accent: 'secondary',
    //   },
    //   featureLink: '/contact',
    // },
    // {
    //   featureName: '3',
    //   featureIntro: {
    //     title: {
    //       start: 'Formación de equipos',
    //       middle: 'de transformación digital',
    //       end: 'para la innovación y el desarrollo empresarial.',
    //     },
    //     text: 'No solo te ofrecemos soluciones en gestión de proyectos, también capacitamos a tu personal para formar equipos de transformación digital que se encarguen de promover la innovación al interior de tu empresa, generando iniciativas que aporten al desarrollo empresarial como son la automatización de procesos, el análisis de datos, la inteligencia de negocios y el uso de inteligencia artificial.',
    //     image: imagesArray.imgLowCode,
    //     accent: 'primary',
    //   },
    //   featureLink: '/contact',
    // },
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
        <div id="section-one" className={styles['service__container']}>
          <HeadingMedium
            title={headingSectionOne.title}
            text={headingSectionOne.text}
          />
          <FeatureBox features={featuresSectionOne} background={sectionBg} />
        </div>
        <div id="section-two" className={styles['service__container']}>
          <HeadingMedium
            title={headingSectionTwo.title}
            text={headingSectionTwo.text}
          />
          <FeatureBox features={featuresSectionTwo} background={sectionBg} />
        </div>
        <div id="section-three" className={styles['service__container']}>
          <HeadingMedium
            title={headingSectionThree.title}
            text={headingSectionThree.text}
          />
          <FeatureBox features={featuresSectionThree} background={sectionBg} />
        </div>
      </section>
    </div>
  );
};

export default Home;
