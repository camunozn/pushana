import React from 'react';
import styles from './Intro.module.css';

const Intro = () => {
  return (
    <section id="section-intro" className={styles['intro']}>
      <div className={styles['intro__container']}>
        <h2 className={styles['intro__heading']}>
          Cambiamos la forma de planificar y controlar tus proyectos de
          construcción.
        </h2>
        <p className={styles['intro__text']}>
          Nuestra aplicación está diseñada para facilitar la planificación y el
          control de proyectos de construcción, haciendo a estos procesos
          eficientes, claros y accesibles para todos. Especialmente pensada para
          potenciar a pequeños y medianos constructores.
        </p>
      </div>
    </section>
  );
};

export default Intro;
