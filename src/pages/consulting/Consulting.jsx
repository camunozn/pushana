import React from 'react';
import Introduction from '../../modules/section-intro/Introduction';
import Product from '../../modules/section-product/Product';
import imagesArray from '../../assets';
import Explore from '../../modules/section-explore/Explore';

const Consulting = () => {
  // INTRO CONSULTING CONTENT
  const headingIntroConsulting = {
    title:
      'Tu aliado estratégico para fortalecer la gestión tus proyectos de construcción.',
    text: 'Desde la licitación hasta el monitoreo y control de proyectos, somos tu aliado en cada paso del camino.',
  };

  const cardsListIntroConsulting = [
    {
      icon: 'fa-solid fa-money-bill-trend-up',
      title: 'Ingeniería de costos',
      style: 'secondary',
      text: 'Te ayudamos con la evaluación económica y financiera de tus proyectos de construcción en la etapa de diseño.',
    },
    {
      icon: 'fa-solid fa-file-invoice-dollar',
      title: 'Licitaciones y cotizaciones',
      style: 'secondary',
      text: 'Te apoyamos en la elaboración de licitaciones y cotizaciones. Realizamos el análisis económico de tu oferta.',
    },
    {
      icon: 'fa-solid fa-magnifying-glass-chart',
      title: 'Monitoreo y control',
      style: 'secondary',
      text: 'Monitoreamos y controlamos el desempeño de tus proyectos, promovemos la toma de decisiones basada en datos.',
    },
    {
      icon: 'fa-solid fa-gears',
      title: 'Automatización de procesos',
      style: 'secondary',
      text: 'Utilizamos tecnología low-code para automatizar tus procesos, aumentamos la eficiencia y minimizamos los errores.',
    },
  ];
  // CONSULTING DETAILS CONTENT
  const cols = 2;

  const headingConsulting = {
    title: 'Consultoría eficiente y efectiva en todas las etapas.',
    text: 'Nuestros servicios se basan en la generación de valor constante. Utilizamos la filosofía ágil en todo lo que hacemos',
  };

  const featuresConsulting = [
    {
      featureName: '1',
      featureIntro: {
        title: {
          start: 'Ingeniería de costos:',
          middle: 'evaluación económica',
          end: 'para proyectos exitosos.',
        },
        text: 'Si eres el promotor de un proyecto de construcción o el consultor de los diseños finales, nosotros te apoyamos con la estimación de costos y la evaluación económica y financiera del proyecto de cara a una construcción exitosa.',
        image: imagesArray.imgBid,
        accent: 'primary',
      },
      featureBox: {
        boxHeading: {
          title: 'Evaluación económica y financiera de proyectos',
          text: '',
        },
        // prettier-ignore
        boxList: [
          { name: '', icon: 'fa-solid fa-sack-dollar' },
          { name: '', icon: 'fa-solid fa-bars-staggered' },
          { name: '', icon: 'fa-solid fa-chart-pie' },
          { name: '', icon: 'fa-solid fa-superscript' },
          { name: '', icon: 'fa-solid fa-helmet-safety' },
          { name: '', icon: 'fa-solid fa-briefcase' },
          { name: '', icon: 'fa-solid fa-calendar-days' },
          { name: '', icon: 'fa-solid fa-chart-bar' },
          { name: '', icon: 'fa-solid fa-code-compare' },
          { name: '', icon: 'fa-solid fa-award' },
        ],
        listCols: cols,
      },
    },
    {
      featureName: '2',
      featureIntro: {
        title: {
          start: 'Licitaciones y cotizaciones:',
          middle: 'análisis económico',
          end: 'que gana contratos.',
        },
        text: 'Te apoyamos en la elaboración de licitaciones y cotizaciones. Realizamos el análisis económico de tu oferta, nos enfocamos en determinar presupuesto, análisis de precios unitarios, cronograma y uso de recursos.',
        image: imagesArray.imgPlanningAlt,
        accent: 'secondary',
      },
      featureBox: {
        boxHeading: {
          title: 'Línea base del proyecto',
          text: '',
        },
        // prettier-ignore
        boxList: [
          { name: '', icon: 'fa-solid fa-file-invoice-dollar' },
          { name: '', icon: 'fa-solid fa-bullseye' },
          { name: '', icon: 'fa-solid fa-calendar-check' },
          { name: '', icon: 'fa-solid fa-person-digging' },
          { name: '', icon: 'fa-solid fa-dolly' },
          { name: '', icon: 'fa-solid fa-helmet-safety' },
          { name: '', icon: 'fa-solid fa-list-check' },
          { name: '', icon: 'fa-solid fa-triangle-exclamation' },
        ],
        listCols: cols,
      },
    },
    {
      featureName: '3',
      featureIntro: {
        title: {
          start: 'Monitoreo y control:',
          middle: 'datos actualizados',
          end: 'para decisiones oportunas.',
        },
        text: 'Realizamos el registro, procesamiento y análisis de la información de campo para monitorear y controlar el desempeño de tus proyectos. Promovemos un cultura de toma de decisiones basadas en datos.',
        image: imagesArray.imgControl,
        accent: 'primary',
      },
      featureBox: {
        boxHeading: {
          title: 'Gestión del valor ganado',
          text: '',
        },
        // prettier-ignore
        boxList: [
          { name: '', icon:'fa-solid fa-chart-line'},
          { name: '', icon: 'fa-solid fa-address-card'},
          { name: '', icon: 'fa-solid fa-snowplow' },
          { name: '', icon: 'fa-solid fa-warehouse' },
          { name: '', icon: 'fa-solid fa-helmet-safety' },
          { name: '', icon: 'fa-solid fa-gauge-simple-high' },
          { name: '', icon: 'fa-solid fa-code-compare' },
          { name: '', icon: 'fa-solid fa-money-bill-trend-up' },
          { name: '', icon: 'fa-solid fa-diagram-successor' },
          { name: '', icon: 'fa-regular fa-compass' },
        ],
        listCols: cols,
      },
    },
    {
      featureName: '4',
      featureIntro: {
        title: {
          start: 'Automatización de procesos:',
          middle: 'transformación digital',
          end: 'hecha realidad.',
        },
        text: 'Aprovechamos el poder de la tecnología para promover la eficiencia y efectividad en tus proyectos. Te ayudamos a automatizar tus procesos con tecnología low-code para implementaciones rápidas y ágiles.',
        image: imagesArray.imgLowCode,
        accent: 'primary',
      },
      featureBox: {
        boxHeading: {
          title: 'Procesos eficientes y efectivos',
          text: '',
        },
        // prettier-ignore
        boxList: [
          { name: '', icon:'fa-solid fa-chart-line'},
          { name: '', icon: 'fa-solid fa-address-card'},
          { name: '', icon: 'fa-solid fa-snowplow' },
          { name: '', icon: 'fa-solid fa-warehouse' },
          { name: '', icon: 'fa-solid fa-helmet-safety' },
          { name: '', icon: 'fa-solid fa-gauge-simple-high' },
          { name: '', icon: 'fa-solid fa-code-compare' },
          { name: '', icon: 'fa-solid fa-money-bill-trend-up' },
          { name: '', icon: 'fa-solid fa-diagram-successor' },
          { name: '', icon: 'fa-regular fa-compass' },
        ],
        listCols: cols,
      },
    },
  ];

  // EXPLORE MORE CONTENT
  const headingExplore = {
    title: 'Explora más: software, comunidad y blog',
    text: 'Conoce más sobre nuestro software, apóyate en nuestra comunidad o descubre nuestro blog.',
  };

  const cardsListExplore = [
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
    {
      icon: 'fa-solid fa-blog',
      title: 'Pushana Blog',
      style: 'primary',
      type: 'page',
      element: '/blog',
    },
  ];

  return (
    <div className="consulting">
      <Introduction
        heading={headingIntroConsulting}
        cardsList={cardsListIntroConsulting}
      />
      <Product heading={headingConsulting} features={featuresConsulting} />
      <Explore heading={headingExplore} cardsList={cardsListExplore} />
    </div>
  );
};

export default Consulting;
