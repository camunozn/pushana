import React from 'react';
import Card from '../../components/UI/Card';
import styles from './Explore.module.css';

const Explore = () => {
  return (
    <section id="section-explore" className={styles.explore}>
      <div className="title-box">
        <h2 className="title-subheading">Explora más</h2>
        <p className="title-paragraph paragraph--primary">
          Conoce más servicios, apóyate en nuestra comunidad o descubre algo
          nuevo con nuestro blog.
        </p>
      </div>
      <div className={styles['explore__cards-box']}>
        <Card
          icon="fa-regular fa-compass"
          title="Consulting & Training"
          style="primary"
        />
        <Card
          icon="fa-solid fa-people-group"
          title="Comunidad Pushana"
          style="primary"
        />
        <Card icon="fa-solid fa-blog" title="Pushana Blog" style="primary" />
      </div>
    </section>
  );
};

export default Explore;
