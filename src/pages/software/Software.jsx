import React from 'react';
import Introduction from '../../modules/section-intro/Introduction';
import Product from '../../modules/section-product/Product';
import imagesArray from '../../assets';
import Explore from '../../modules/section-explore/Explore';

const Software = () => {
  // INTRO APP CONTENT
  const headingIntroSoftware = {
    title:
      'Cambiamos la forma de planificar y controlar tus proyectos de construcción.',
    text: 'Nuestra aplicación está diseñada para hacer los procesos de planificación y control fáciles, eficientes y accesibles para todos.',
  };

  const cardsListIntroSoftware = [
    {
      icon: 'fa-solid fa-wand-magic-sparkles',
      title: 'Simple e intuitivo',
      style: 'secondary',
      text: 'Desarrollamos una interfaz minimalista, sencilla y clara, con un flujo de trabajo intuitivo.',
    },
    {
      icon: 'fa-solid fa-gauge-high',
      title: 'Ágil y eficiente',
      style: 'secondary',
      text: 'Eliminamos tareas manuales y reprocesos. Enfocamos nuestra aplicación en procesos ágiles.',
    },
    {
      icon: 'fa-solid fa-magnifying-glass-chart',
      title: 'Decisiones basadas en datos',
      style: 'secondary',
      text: 'Incluimos herramientas que facilitan y promueven toma de decisiones basadas en datos.',
    },
    {
      icon: 'fa-solid fa-hand-holding-dollar',
      title: 'Versátil y accesible',
      style: 'secondary',
      text: 'Ofrecemos suscripciones solo por el tiempo y para los usuarios que necesites.',
    },
  ];
  // APP DETAILS CONTENT
  const cols = 2;

  const headingSoftware = {
    title: 'Desde la fase precontractual hasta el final de la construcción.',
    text: 'Te acompañamos en las principales etapas de tu proyecto: precontractual, preconstrucción y construcción.',
  };

  const featuresSoftware = [
    {
      featureName: 'Biding',
      featureIntro: {
        title: {
          start: 'Precontractual:',
          middle: 'licitaciones y cotizaciones',
          end: 'para clientes públicos o privados.',
        },
        text: 'Nuestra aplicación hace fácil el proceso de elaboración de licitaciones y cotizaciones, brindando una experiencia ágil y eficiente. Además incluimos herramientas para ayudarte con el análisis de tu oferta.',
        image: imagesArray.imgBid,
        accent: 'primary',
      },
      featureBox: {
        boxHeading: {
          title: 'Ofertas públicas o privadas',
          text: 'Todo lo que necesitas para presentar una oferta completa y competitiva.',
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
      featureName: 'Planning',
      featureIntro: {
        title: {
          start: 'Preconstrucción:',
          middle: 'inicio y planificación',
          end: 'para prepararte de la mejor manera.',
        },
        text: 'Con nuestra aplicación pasa de la licitación a la construcción sin problemas. Revisa el alcance, realiza el presupuesto meta, ajusta la programación y prepara toda la información que necesitas para empezar a construir.',
        image: imagesArray.imgPlanningAlt,
        accent: 'secondary',
      },
      featureBox: {
        boxHeading: {
          title: 'Línea Base del proyecto',
          text: 'Prepara fácilmente todo lo necesario para fijar tu línea base y empezar a construir.',
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
      featureName: 'Controlling',
      featureIntro: {
        title: {
          start: 'Construcción:',
          middle: 'monitoreo y control',
          end: 'para una ejecución con conciencia.',
        },
        text: 'Nuestro software simplifica los procesos de registro y análisis de la información de campo, para mantener reportes actualizados sobre el desempeño de tu proyecto y promover la toma de decisiones basadas en datos.',
        image: imagesArray.imgControl,
        accent: 'primary',
      },
      featureBox: {
        boxHeading: {
          title: 'Gestión del valor ganado',
          text: 'Aplica la gestión del valor ganado para evaluar el desempeño de tu proyecto.',
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
  ];

  // EXPLORE MORE CONTENT
  const headingExplore = {
    title: 'Explora más: consultoría, comunidad y blog',
    text: 'Conoce más sobre nuestros servicios de consultoría, apóyate en nuestra comunidad o descubre nuestro blog.',
  };

  const cardsListExplore = [
    {
      icon: 'fa-regular fa-compass',
      title: 'Pushana Consulting',
      style: 'primary',
      type: 'page',
      element: '/consulting',
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
    <div className="software">
      <Introduction
        heading={headingIntroSoftware}
        cardsList={cardsListIntroSoftware}
      />
      <Product heading={headingSoftware} features={featuresSoftware} />
      <Explore heading={headingExplore} cardsList={cardsListExplore} />
    </div>
  );
};

export default Software;
