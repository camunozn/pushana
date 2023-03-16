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
    { name: 'Ficha para cierre de oferta', icon: 'fa-solid fa-trophy' },
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
              Pre-contractual{' '}
              <span className={styles['accent--primary']}>
                &mdash; licitaciones y cotizaciones:{' '}
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
              Pre-construcción{' '}
              <span className={styles['accent--secondary']}>
                &mdash; inicio y planificación:{' '}
              </span>
              prepárate de la mejor manera antes de la construcción de tu
              proyecto.
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
          <div className={styles['product__feature-cards']}></div>
        </div>
        <div className={styles['product__feature']}>
          <div className={styles['feature__container']}>
            <h3 className={styles['feature__heading']}>
              Construcción{' '}
              <span className={styles['accent--primary']}>
                &mdash; monitoreo y control:{' '}
              </span>
              ejecución con conciencia, conoce el desempeño de tu proyecto en
              todo momento.
            </h3>
            <p className={styles['feature__text']}>
              Simplificamos y automatizamos las tareas de registro,
              procesamiento y análisis de los datos de campo para reducir los
              tiempos de entrega de informes y garantizar la calidad de la
              información. Así. te mantenemos actualizado sobre el estado de tu
              proyecto y te permitimos tomar mejores decisiones basadas en
              datos.
            </p>
            <div className={styles['feature__img-box']}>
              <img src={imagesArray.imgControl} alt="Imagen control" />
            </div>
          </div>
          <div className={styles['product__feature-cards']}></div>
        </div>
      </div>
    </section>
  );
};

export default Product;
