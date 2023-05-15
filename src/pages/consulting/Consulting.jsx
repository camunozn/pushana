import React from 'react';
import Introduction from '../../modules/section-intro/Introduction';
import Product from '../../modules/section-product/Product';
import imagesArray from '../../assets';
import { useDispatch } from 'react-redux';
import { setIsSticky } from '../../store/slices/isSticky.slice';

const Consulting = () => {
  const dispatch = useDispatch();
  dispatch(setIsSticky(true));

  // INTRO CONSULTING CONTENT
  const headingIntroConsulting = {
    title:
      'Potenciamos los procesos de planificación y control de tus proyectos de construcción.',
    text: 'Impulsamos la gestión de tus proyectos a través de servicios de consultoría especializados y soluciones de software intuitivas que generan resultados. Además, tenemos una gran comunidad en la que te puedes apoyar!',
  };

  const cardsListIntroConsulting = [
    {
      icon: 'fa-regular fa-compass',
      title: 'Consultoría',
      style: 'primary',
      type: 'section',
      element: 'section-consulting',
    },
    {
      icon: 'fa-solid fa-laptop-code',
      title: 'Pushana App',
      style: 'primary',
      type: 'section',
      element: 'section-software',
    },
    {
      icon: 'fa-solid fa-people-group',
      title: 'Comunidad',
      style: 'primary',
    },
  ];
  // CONSULTING DETAILS CONTENT
  const colsConsulting = 2;

  const headingConsulting = {
    title: 'Desde la fase precontractual hasta el final de la construcción.',
    text: 'Te acompañamos en las principales etapas de tu proyecto: precontractual, preconstrucción y construcción. Somos tu aliado en cada paso del camino.',
    // title: 'Tu aliado estratégico para fortalecer la gestión.',
    // text: 'Desde la ingeniería de costos hasta la planificación detallada y el monitoreo y control, somos tu aliado en cada paso del camino.',
  };

  const firstFeatureIntroConsulting = {
    title: {
      start: 'Precontractual:',
      middle: 'licitaciones y cotizaciones',
      end: 'para clientes públicos o privados.',
    },
    text: 'Hacemos fácil el proceso de elaboración de licitaciones y cotizaciones, optimizamos nuestra app para brindar una experiencia ágil y eficiente. Además incluimos herramientas para ayudarte con el análisis de tu oferta.',
    image: imagesArray.imgBid,
    accent: 'primary',
  };

  const secondFeatureIntroConsulting = {
    title: {
      start: 'Preconstrucción:',
      middle: 'inicio y planificación',
      end: 'para prepararte de la mejor manera.',
    },
    text: 'Pasa de la licitación al inicio de la construcción sin problemas. Revisa el alcance, realiza el presupuesto meta, ajusta la programación y prepara toda la información que necesitas para empezar la ejecución de tu proyecto.',
    image: imagesArray.imgPlanning,
    accent: 'secondary',
  };

  const thirdFeatureIntroConsulting = {
    title: {
      start: 'Construcción:',
      middle: 'monitoreo y control',
      end: 'para una ejecución con conciencia.',
    },
    text: 'Simplificamos los procesos de registro y análisis de la información campo para mantener los reportes sobre el desempeño de tu proyecto actualizados en todo momento y permitir la toma de decisiones basadas en datos.',
    image: imagesArray.imgControl,
    accent: 'primary',
  };

  // Feature Box Headings
  const firstBoxHeadingConsulting = {
    title: 'Ofertas públicas o privadas',
    text: 'Todo lo que necesitas para presentar una oferta completa y competitiva.',
  };
  const secondBoxHeadingConsulting = {
    title: 'Línea Base del proyecto',
    text: 'Prepara fácilmente todo lo necesario para fijar tu línea base y empezar a construir.',
  };
  const thirdBoxHeadingConsulting = {
    title: 'Gestión del valor ganado',
    text: 'Aplica la gestión del valor ganado para evaluar el desempeño de tu proyecto.',
  };

  // Features Content

  // prettier-ignore
  const firstFeaturesConsulting = [
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
  ];

  // prettier-ignore
  const secondFeaturesConsulting = [
    { name: 'Centros de control', icon: 'fa-solid fa-file-invoice-dollar' },
    { name: 'Presupuesto meta', icon: 'fa-solid fa-bullseye' },
    { name: 'Programación ajustada', icon: 'fa-solid fa-calendar-check' },
    { name: 'Plan de uso de recursos', icon: 'fa-solid fa-person-digging' },
    { name: 'Plan de compras', icon: 'fa-solid fa-dolly' },
    { name: 'Plan de subcontratos', icon: 'fa-solid fa-helmet-safety' },
    { name: 'Plan de control de la calidad', icon: 'fa-solid fa-list-check' },
    { name: 'Plan de gestión de riesgos', icon: 'fa-solid fa-triangle-exclamation' },
  ];

  // prettier-ignore
  const thirdFeaturesConsulting = [
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
  ];

  return (
    <div className="consulting">
      <Introduction
        id="section-introduction"
        heading={headingIntroConsulting}
        cardsList={cardsListIntroConsulting}
      />
      <Product
        id="section-consulting"
        cols={colsConsulting}
        heading={headingConsulting}
        firstFeatureIntro={firstFeatureIntroConsulting}
        secondFeatureIntro={secondFeatureIntroConsulting}
        thirdFeatureIntro={thirdFeatureIntroConsulting}
        firstBoxHeading={firstBoxHeadingConsulting}
        secondBoxHeading={secondBoxHeadingConsulting}
        thirdBoxHeading={thirdBoxHeadingConsulting}
        firstFeatures={firstFeaturesConsulting}
        secondFeatures={secondFeaturesConsulting}
        thirdFeatures={thirdFeaturesConsulting}
      />
    </div>
  );
};

export default Consulting;
