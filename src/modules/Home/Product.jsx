import React from 'react';
import Box from '../../components/molecules/UI/Box';
import Intro from '../../components/molecules/UI/Intro';
import HeadingMedium from '../../components/molecules/UI/HeadingMedium';
import imagesArray from '../../assets/index';
import styles from './Product.module.css';

const Product = () => {
  // Section Heading
  const heading = {
    title: 'Desde la fase precontractual hasta el final de la construcción.',
    text: 'Te acompañamos en las principales etapas de tu proyecto: precontractual, preconstrucción y construcción',
  };

  // Feature Headings
  const bidFeatureIntro = {
    title: {
      start: 'Precontractual:',
      middle: 'licitaciones y cotizaciones',
      end: 'para clientes públicos o privados.',
    },
    text: 'Hacemos fácil el proceso de elaboración de licitaciones y cotizaciones, optimizamos nuestra interfaz para brindar una experiencia ágil y eficiente. Además incluimos herramientas para ayudarte con el análisis como: 80/20, uso de recursos, análisis paramétricos, análisis comparativos y fichas de cierre para mejorar tu oferta.',
    image: imagesArray.imgBid,
    accent: 'primary',
  };

  const planningFeatureIntro = {
    title: {
      start: 'Preconstrucción:',
      middle: 'inicio y planificación',
      end: 'para prepararte de la mejor manera.',
    },
    text: 'Transición sin inconvenientes. Pasa de la licitación al inicio de la construcción sin problemas. Revisa el alcance, realiza el presupuesto meta, ajusta la programación de obra, haz un plan de compras y prepara toda la información que necesitas para empezar la ejecución de tu proyecto.',
    image: imagesArray.imgPlanning,
    accent: 'secondary',
  };

  const controlFeatureIntro = {
    title: {
      start: 'Construcción:',
      middle: 'monitoreo y control',
      end: 'para una ejecución con conciencia. Datos para tomar mejores decisiones.',
    },
    text: 'Simplificamos y automatizamos las tareas de registro, procesamiento y análisis de los datos de campo para reducir los tiempos de entrega de informes y garantizar la calidad de la información. Así, te mantenemos actualizado sobre el desempeño de tu proyecto y te permitimos tomar mejores decisiones basadas en datos.',
    image: imagesArray.imgControl,
    accent: 'primary',
  };

  // Feature Box Headings
  const bidBoxHeading = {
    title: 'Ofertas públicas o privadas',
    text: 'Todo lo que necesitas para presentar una oferta completa y competitiva',
  };
  const planningBoxHeading = {
    title: 'Línea Base del proyecto',
    text: 'Prepara fácilmente todo lo necesario para fijar tu línea base y empezar a construir',
  };
  const controlBoxHeading = {
    title: 'Gestión del valor ganado',
    text: 'Aplica la gestión del valor ganado para evaluar el desempeño de tu proyecto',
  };

  // Features Content

  // prettier-ignore
  const bidFeatures = [
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
  const planningFeatures = [
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
  const controlFeatures = [
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
    <section className={styles.product}>
      <div className={styles['product__container']}>
        <HeadingMedium title={heading.title} text={heading.text} />
        <Intro
          title={bidFeatureIntro.title}
          text={bidFeatureIntro.text}
          image={bidFeatureIntro.image}
          accent={bidFeatureIntro.accent}
        />
        <Box
          title={bidBoxHeading.title}
          text={bidBoxHeading.text}
          list={bidFeatures}
          cols={2}
        />
        <Intro
          title={planningFeatureIntro.title}
          text={planningFeatureIntro.text}
          image={planningFeatureIntro.image}
          accent={planningFeatureIntro.accent}
        />
        <Box
          title={planningBoxHeading.title}
          text={planningBoxHeading.text}
          list={planningFeatures}
          cols={2}
        />
        <Intro
          title={controlFeatureIntro.title}
          text={controlFeatureIntro.text}
          image={controlFeatureIntro.image}
          accent={controlFeatureIntro.accent}
        />
        <Box
          title={controlBoxHeading.title}
          text={controlBoxHeading.text}
          list={controlFeatures}
          cols={2}
        />
      </div>
    </section>
  );
};

export default Product;
