import React from 'react';
import Card from '../../components/UI/Card';
import imagesArray from '../../assets/index';
import styles from './Explore.module.css';

const Explore = () => {
  return (
    <section className={styles.explore}>
      <div className={styles['explore__title-box']}>
        <h2 className="subheading">Explora ahora</h2>
        <p className="paragraph">
          Conoce nuestra app, apóyate en nuestra comunidad o descubre algo nuevo
          con nuestro blog.
        </p>
      </div>
      <div className={styles['explore__cards-box']}>
        <Card
          image={imagesArray.imgEfficient}
          title="Pushana App"
          accent="primary"
        />
        <Card
          image={imagesArray.imgEffective}
          title="PM Consulting"
          accent="secondary"
        />
        <Card image={imagesArray.imgClear} title="PM School" accent="primary" />
        <Card
          image={imagesArray.imgCommunity}
          title="Comunidad Pushana"
          accent="secondary"
        />
        <Card
          image={imagesArray.imgBlog}
          title="Pushana Blog"
          accent="primary"
        />
      </div>
    </section>
  );
};

export default Explore;
