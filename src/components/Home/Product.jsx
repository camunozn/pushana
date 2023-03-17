import React from 'react';
import imagesArray from '../../assets/index';
import Box from '../UI/Box';
import styles from './Product.module.css';

const Product = () => {
  const bidDetails = [
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

  const planDetails = [
    { name: 'Centros de control', icon: 'fa-solid fa-file-invoice-dollar' },
    { name: 'Presupuesto meta', icon: 'fa-solid fa-bullseye' },
    { name: 'Programación ajustada', icon: 'fa-solid fa-calendar-check' },
    { name: 'Plan de uso de recursos', icon: 'fa-solid fa-person-digging' },
    { name: 'Plan de compras', icon: 'fa-solid fa-dolly' },
    { name: 'Plan de subcontratos', icon: 'fa-solid fa-helmet-safety' },
    { name: 'Plan de control de la calidad', icon: 'fa-solid fa-list-check' },
    {
      name: 'Plan de gestión de riesgos',
      icon: 'fa-solid fa-triangle-exclamation',
    },
  ];

  const controlDetails = [
    {
      name: 'Registro y control de avance de obra',
      icon: 'fa-solid fa-chart-line',
    },
    {
      name: 'Registro y control de horas hombre',
      icon: 'fa-solid fa-address-card',
    },
    {
      name: 'Registro y control de horas máquina',
      icon: 'fa-solid fa-snowplow',
    },
    {
      name: 'Registro y control de inventario',
      icon: 'fa-solid fa-warehouse',
    },
    {
      name: 'Registro y control de subcontratos',
      icon: 'fa-solid fa-helmet-safety',
    },
    {
      name: 'Control de productividad',
      icon: 'fa-solid fa-gauge-simple-high',
    },
    { name: 'Control de cambios', icon: 'fa-solid fa-code-compare' },
    { name: 'Control de costos', icon: 'fa-solid fa-money-bill-trend-up' },
    { name: 'Control de cronograma', icon: 'fa-solid fa-diagram-successor' },
    {
      name: 'Tableros de mando e informes gerenciales',
      icon: 'fa-regular fa-compass',
    },
  ];

  return (
    <section className={styles.product}>
      <div className={styles['product__container']}>
        <div className="title-box">
          <h2 className="title-subheading">Para todas las etapas</h2>
          <p className="title-paragraph paragraph--primary">
            Desde la fase pre-contractual hasta el final de la construcción. Te
            acompañamos en todas las etapas de tus proyectos.
          </p>
        </div>
        <div className={styles['product__feature']}>
          <div className={styles['feature__container']}>
            <h3 className={styles['feature__heading']}>
              Pre-contractual:{' '}
              <span className={styles['accent--primary']}>
                licitaciones y cotizaciones{' '}
              </span>
              para clientes públicos o privados.
            </h3>
            <p className={styles['feature__text']}>
              Hacemos fácil el proceso de elaboración de licitaciones y
              cotizaciones, optimizamos nuestra interfáz para brindar una
              experiencia ágil y eficiente. Además incluimos herramientas para
              ayudarte con el análisis como: 80/20, uso de recursos, análisis
              paramétricos, análisis comparativos y fichas de cierre para
              mejorar tu oferta.
            </p>
            <div className={styles['feature__img-box']}>
              <img src={imagesArray.imgBid} alt="Imagen licitaciones" />
            </div>
          </div>
        </div>
        <div className={styles['product__box']}>
          <Box
            heading={'Ofertas públicas o privadas'}
            text={
              'Todo lo que necesitas para presentar una oferta completa y competitiva'
            }
            details={bidDetails}
          />
        </div>
        <div className={styles['product__feature']}>
          <div className={styles['feature__container']}>
            <h3 className={styles['feature__heading']}>
              Pre-construcción:{' '}
              <span className={styles['accent--secondary']}>
                inicio y planificación{' '}
              </span>
              para prepararte de la mejor manera.
            </h3>
            <p className={styles['feature__text']}>
              Transición sin inconvenientes. Pasa de la licitación al inicio de
              la construcción sin problemas. Revisa el alcance, realiza el
              presupuesto meta, ajusta la programación de obra, haz un plan de
              compras y prepara toda la información que necesitas para empezar
              la ejecución de tu proyecto.
            </p>
            <div className={styles['feature__img-box']}>
              <img src={imagesArray.imgPlanning} alt="Imagen planificación" />
            </div>
          </div>
        </div>
        <div className={styles['product__box']}>
          <Box
            heading={'Línea Base del proyecto'}
            text={
              'Prepara fácilmente todo lo necesario para fijar tu línea base y empezar a construir'
            }
            details={planDetails}
          />
        </div>
        <div className={styles['product__feature']}>
          <div className={styles['feature__container']}>
            <h3 className={styles['feature__heading']}>
              Construcción:{' '}
              <span className={styles['accent--primary']}>
                monitoreo y control{' '}
              </span>
              para una ejecución con conciencia. Datos para tomar decisiones.
            </h3>
            <p className={styles['feature__text']}>
              Simplificamos y automatizamos las tareas de registro,
              procesamiento y análisis de los datos de campo para reducir los
              tiempos de entrega de informes y garantizar la calidad de la
              información. Así, te mantenemos actualizado sobre el desempeño de
              tu proyecto y te permitimos tomar mejores decisiones basadas en
              datos.
            </p>
            <div className={styles['feature__img-box']}>
              <img src={imagesArray.imgControl} alt="Imagen control" />
            </div>
          </div>
        </div>
        <div className={styles['product__box']}>
          <Box
            heading={'Gestión del valor ganado'}
            text={
              'Aplica la gestión del valor ganado para evaluar el desempeño de tu proyecto de forma simple, eficiente y efectiva.'
            }
            details={controlDetails}
          />
        </div>
      </div>
    </section>
  );
};

export default Product;
