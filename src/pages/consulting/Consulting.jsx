import React from 'react';
import Introduction from '../../modules/section-intro/Introduction';
import Product from '../../modules/section-product/Product';
import imagesArray from '../../assets';
import Explore from '../../modules/section-explore/Explore';

const Consulting = () => {
  // INTRO CONSULTING CONTENT
  const headingIntroConsulting = {
    title:
      'Tu aliado estratégico para fortalecer la gestión tus proyectos de construcción',
    text: 'Desde la ingeniería de costos pasando por la planificación detallada hasta el monitoreo y control de proyectos, somos tu aliado en cada paso del camino.',
  };

  const cardsListIntroConsulting = [
    {
      icon: 'fa-solid fa-wand-magic-sparkles',
      title: 'Ingeniería de costos',
      style: 'secondary',
      text: '',
    },
    {
      icon: 'fa-solid fa-gauge-high',
      title: 'Planificación detallada',
      style: 'secondary',
      text: '',
    },
    {
      icon: 'fa-solid fa-magnifying-glass-chart',
      title: 'Monitoreo y control',
      style: 'secondary',
      text: '',
    },
    {
      icon: 'fa-solid fa-hand-holding-dollar',
      title: 'Automatización de procesos',
      style: 'secondary',
      text: '',
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
          middle: '',
          end: '',
        },
        text: '',
        image: imagesArray.imgBid,
        accent: 'primary',
      },
      featureBox: {
        boxHeading: {
          title: 'Evaluación económica de proyectos',
          text: '',
        },
        // prettier-ignore
        boxList: [
          { name: 'Presupuesto', icon: 'fa-solid fa-sack-dollar' },
          { name: 'Cronograma', icon: 'fa-solid fa-bars-staggered' },
          { name: 'Desagregación tecnológica', icon: 'fa-solid fa-chart-pie' },
          { name: 'Fórmula polinómica', icon: 'fa-solid fa-superscript' },
          { name: 'Análisis de costos directos', icon: 'fa-solid fa-helmet-safety' },
          { name: 'Análisis de costos indirectos', icon: 'fa-solid fa-briefcase' },
          { name: 'Análisis por permanencia', icon: 'fa-solid fa-calendar-days' },
          { name: 'Análisis de Pareto', icon: 'fa-solid fa-chart-bar' },
          { name: 'Análisis comparativo', icon: 'fa-solid fa-code-compare' },
          { name: 'Ficha para cierre de oferta', icon: 'fa-solid fa-award' },
        ],
        listCols: cols,
      },
    },
    {
      featureName: '2',
      featureIntro: {
        title: {
          start: 'Planificación detallada:',
          middle: '',
          end: '',
        },
        text: '',
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
          { name: 'Centros de control', icon: 'fa-solid fa-file-invoice-dollar' },
          { name: 'Presupuesto meta', icon: 'fa-solid fa-bullseye' },
          { name: 'Programación ajustada', icon: 'fa-solid fa-calendar-check' },
          { name: 'Plan de uso de recursos', icon: 'fa-solid fa-person-digging' },
          { name: 'Plan de compras', icon: 'fa-solid fa-dolly' },
          { name: 'Plan de subcontratos', icon: 'fa-solid fa-helmet-safety' },
          { name: 'Plan de control de la calidad', icon: 'fa-solid fa-list-check' },
          { name: 'Plan de gestión de riesgos', icon: 'fa-solid fa-triangle-exclamation' },
        ],
        listCols: cols,
      },
    },
    {
      featureName: '3',
      featureIntro: {
        title: {
          start: 'Monitoreo y control:',
          middle: '',
          end: '',
        },
        text: '',
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
          { name: 'Registro y control de avance de obra', icon:'fa-solid fa-chart-line'},
          { name: 'Registro y control de horas hombre', icon: 'fa-solid fa-address-card'},
          { name: 'Registro y control de horas máquina', icon: 'fa-solid fa-snowplow' },
          { name: 'Registro y control de inventario', icon: 'fa-solid fa-warehouse' },
          { name: 'Registro y control de subcontratos', icon: 'fa-solid fa-helmet-safety' },
          { name: 'Control de productividad', icon: 'fa-solid fa-gauge-simple-high' },
          { name: 'Control de cambios', icon: 'fa-solid fa-code-compare' },
          { name: 'Control de costos', icon: 'fa-solid fa-money-bill-trend-up' },
          { name: 'Control de cronograma', icon: 'fa-solid fa-diagram-successor' },
          { name: 'Tableros de mando e informes gerenciales', icon: 'fa-regular fa-compass' },
        ],
        listCols: cols,
      },
    },
    {
      featureName: '4',
      featureIntro: {
        title: {
          start: 'Automatización de procesos:',
          middle: '',
          end: '',
        },
        text: '',
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
