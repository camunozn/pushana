import React from 'react';
import imagesArray from '../../assets/index';
import styles from './Product.module.css';

const Product = () => {
  return (
    <section className={styles.product}>
      <div className={styles['product__container']}>
        <div className="title-box">
          <h2 className="title-subheading">
            Para todas las etapas de tu proyecto
          </h2>
          <p className="title-paragraph paragraph--primary">
            Desde la fase pre-contractual hasta el final de la construcción. Te
            acompañamos en todos los procesos de la gestión de proyectos.
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
          <div className={styles['product__feature-cards']}></div>
        </div>
        <div className={styles['product__feature']}>
          <div className={styles['feature__container']}>
            <h3 className={styles['feature__heading']}>
              Pre-construcción{' '}
              <span className={styles['accent--secondary']}>
                &mdash; inicio y planificación:{' '}
              </span>
              prepárate de la mejor manera antes de iniciar la construcción de
              tu proyecto.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              nulla laudantium minus culpa expedita laborum id alias adipisci
              porro error consequatur ea quaerat dignissimos mollitia nobis!
              Possimus, rem velit? Perferendis, quis. Ipsam voluptatibus ipsum
              illum iusto quod natus exercitationem perferendis.
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
