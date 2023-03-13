import React from 'react';
import Card from '../UI/Card';
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
            Desde la etapa pre-contractual hasta la conclusión del contrato. Te
            acompañamos de inicio a fin con todos los procesos de la gestión de
            proyectos.
          </p>
        </div>
        <div className={styles['product__feature']}>
          <div className="title-box">
            <h3 className="title-heading heading--secondary">
              Etapa pre-contactual
            </h3>
            <p className="title-paragraph paragraph--secondary">
              Desarrolla fácilmente licitaciones y cotizaciones para clientes
              públicos o privados.
            </p>
          </div>
          <div className={styles['product__feature-cards']}>
            <Card
              icon="fa-solid fa-sack-dollar"
              title="Presupuesto"
              style="secondary"
            />
            <Card
              icon="fa-solid fa-bars-staggered"
              title="Cronograma"
              style="secondary"
            />
            <Card
              icon="fa-solid fa-chart-pie"
              title="Desagregación Tecnológica"
              style="secondary"
            />
            <Card
              icon="fa-solid fa-superscript"
              title="Fórmula Polinómica"
              style="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
