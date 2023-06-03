import React from 'react';
import Introduction from '../../modules/section-intro/Introduction';
import Product from '../../modules/section-product/Product';
import imagesArray from '../../assets';
import Explore from '../../modules/section-explore/Explore';

const Consulting = () => {
  // INTRO CONSULTING CONTENT
  const headingIntroConsulting = {
    title:
      'Tu aliado estratégico para fortalecer la gestión de tus proyectos de construcción.',
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
  const ctaText = 'Consultar';

  const headingConsulting = {
    title: 'Consultoría eficiente y efectiva en todas las etapas.',
    text: 'Nuestros servicios de consultoría se basan en la generación de valor constante. Utilizamos la filosofía ágil en todo lo que hacemos para generar resultados tangibles.',
  };

  const featuresConsulting = [
    {
      featureName: '1',
      featureIntro: {
        title: {
          start: 'Ingeniería de costos:',
          middle: 'estimación de costos',
          end: 'y análisis financiero para proyectos exitosos.',
        },
        text: 'Si eres el promotor de un proyecto de construcción o el consultor de los diseños finales, nosotros te apoyamos con la estimación de costos y la evaluación económica-financiera del proyecto de cara a una construcción exitosa.',
        image: imagesArray.imgCostEng,
        accent: 'primary',
      },
      featureBox: {
        boxHeading: {
          title: 'Evaluación económica y financiera de proyectos',
          text: 'Conoce el verdadero valor de tu proyecto antes de construirlo.',
        },
        // prettier-ignore
        boxList: [
          { name: 'Estructura desglosada de trabajo', icon: 'fa-solid fa-diagram-project' },
          { name: 'Estimación de costos directos', icon: 'fa-solid fa-helmet-safety' },
          { name: 'Estimación de costos indirectos', icon: 'fa-solid fa-building' },
          { name: 'Cronograma de trabajos y flujo', icon: 'fa-solid fa-chart-gantt' },
          { name: 'Estimación de costos financieros', icon: 'fa-solid fa-sack-dollar' },
          { name: 'Desarrollo de modelo financiero', icon: 'fa-solid fa-chart-column' },
          { name: 'Estados financieros proforma', icon: 'fa-solid fa-file-invoice-dollar' },
          { name: 'Definición de tasas de descuento', icon: 'fa-solid fa-percent' },
          { name: 'Flujo libre de efectivo del proyecto', icon: 'fa-solid fa-money-bill-trend-up' },
          { name: 'Evaluación económica y financiera', icon: 'fa-solid fa-magnifying-glass-dollar' },
        ],
        listCols: cols,
      },
      featureLink: '/contact',
      featureCta: {
        text: ctaText,
      },
    },
    {
      featureName: '2',
      featureIntro: {
        title: {
          start: 'Licitaciones y cotizaciones:',
          middle: 'análisis económico',
          end: 'de ofertas que ganan contratos.',
        },
        text: 'Te apoyamos en la elaboración de licitaciones y cotizaciones. Realizamos el análisis económico de tu oferta, nos enfocamos en determinar presupuesto, análisis de precios unitarios, cronogramas y uso de recursos.',
        image: imagesArray.imgBidAlt,
        accent: 'secondary',
      },
      featureBox: {
        boxHeading: {
          title: 'Ofertas públicas o privadas',
          text: 'Todo lo que necesitas para presentar una oferta competitiva.',
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
      featureLink: '/contact',
      featureCta: {
        text: ctaText,
      },
    },
    {
      featureName: '3',
      featureIntro: {
        title: {
          start: 'Monitoreo y control:',
          middle: 'información actualizada',
          end: 'para decisiones oportunas.',
        },
        text: 'Realizamos el registro, procesamiento y análisis de la información de campo para monitorear y controlar el desempeño de tus proyectos. Promovemos un cultura de toma de decisiones basadas en datos.',
        image: imagesArray.imgControl,
        accent: 'primary',
      },
      featureBox: {
        boxHeading: {
          title: 'Gestión del valor ganado',
          text: 'Análisis de valor ganado para el monitoreo y control de tus proyectos.',
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
          { name: 'Tableros de control e informes gerenciales', icon: 'fa-regular fa-compass' },
        ],
        listCols: cols,
      },
      featureLink: '/contact',
      featureCta: {
        text: ctaText,
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
        image: imagesArray.imgLowCodeAlt,
        accent: 'secondary',
      },
      featureBox: {
        boxHeading: {
          title: 'Procesos eficientes y efectivos',
          text: 'Automatiza los procesos de gestión para generar más y mejores resultados.',
        },
        // prettier-ignore
        boxList: [
          { name: 'Procesos de gestión del cronograma', icon:'fa-solid fa-calendar-days'},
          { name: 'Procesos de gestión de costos', icon: 'fa-solid fa-coins'},
          { name: 'Procesos de gestión de adquisiciones', icon: 'fa-solid fa-cart-shopping' },
          { name: 'Procesos de gestión de recursos', icon: 'fa-solid fa-snowplow' },
          { name: 'Procesos de gestión de la calidad', icon: 'fa-solid fa-clipboard-check' },
          { name: 'Procesos de gestión de riesgos', icon: 'fa-solid fa-triangle-exclamation' },
          { name: 'Procesos de gestión de las comunicaciones', icon: 'fa-solid fa-phone' },
          { name: 'Procesos de gestión de los interesados', icon: 'fa-solid fa-handshake' },
        ],
        listCols: cols,
      },
      featureLink: '/contact',
      featureCta: {
        text: ctaText,
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
      title: 'CPM Software',
      style: 'primary',
      type: 'page',
      element: '/software',
    },
    {
      icon: 'fa-solid fa-people-group',
      title: 'Comunidad',
      style: 'primary',
      type: 'page',
      element: '/community',
    },
    {
      icon: 'fa-solid fa-blog',
      title: 'Blog',
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
