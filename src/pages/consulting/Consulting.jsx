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
    text: 'Desde la ingeniería de costos pasando por la planificación detallada hasta el monitoreo y control de proyectos, somos tu aliado en cada paso del camino.',
  };

  const cardsListIntroConsulting = [
    {
      icon: 'fa-solid fa-money-bill-trend-up',
      title: 'Ingeniería de costos',
      style: 'secondary',
      text: 'Estimación de costos detallada y análisis financiero profundo para presupuestos de construcción acertados.',
    },
    {
      icon: 'fa-solid fa-chart-gantt',
      title: 'Planificación detallada',
      style: 'secondary',
      text: 'Planificación integral de tus proyectos de construcción para una ejecución ágil y una conclusión oportuna.',
    },
    {
      icon: 'fa-solid fa-magnifying-glass-chart',
      title: 'Monitoreo y control',
      style: 'secondary',
      text: 'Control para tus proyectos, proporcionamos actualizaciones en tiempo real para la toma de decisiones basada en datos.',
    },
    {
      icon: 'fa-solid fa-gears',
      title: 'Automatización de procesos',
      style: 'secondary',
      text: 'Tecnología low-code para automatizar tus procesos, aumentando la eficiencia y reduciendo errores humanos.',
    },
  ];
  // CONSULTING DETAILS CONTENT
  const cols = 2;

  const headingConsulting = {
    title: '',
    text: '',
  };

  const featuresConsulting = [
    {
      featureName: '1',
      featureIntro: {
        title: {
          start: 'Ingeniería de costos:',
          middle: 'estimación detallada',
          end: 'en la que puedes confiar.',
        },
        text: 'Ayuda a que tus proyectos de construcción se completen a tiempo y dentro de presupuesto con nuestros servicios de ingeniería de costos. Evalúa económica y financieramente tu proyecto para determinar un presupuesto acertado y realista que te ahorre problemas durante la ejecución.',
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
          start: 'Planificación detallada:',
          middle: 'definiendo el éxito',
          end: 'desde cero.',
        },
        text: 'Elimina la incertidumbre y aumenta el éxito del proyecto con nuestro servicio de planificación detallada de proyectos. Hacemos que las tareas complejas sean manejables, ayudándote a alcanzar tus objetivos de manera efectiva y eficiente.',
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
        text: 'Mantén un control real sobre tus proyectos de construcción en todo momento. Aseguramos que tus proyectos se mantenga en el camino correcto, abordando los problemas de manera proactiva y minimizando posibles contratiempos.',
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
        text: 'Aprovecha el poder de la tecnología para promover la eficiencia y efectividad en tus proyectos de construcción. Te ayudamos a automatizar tus procesos con tecnología low-code, para aumentar la eficiencia y mejorar la calidad de la información.',
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
