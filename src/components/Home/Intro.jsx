import React from 'react';
import styles from './Intro.module.css';

const Intro = () => {
  return (
    <section className={styles['intro']}>
      <h2 className={styles['intro__heading']}>
        Pushana es una empresa que busca cambiar la forma de planificar y
        controlar los proyectos de construcción en el país.
      </h2>
      <p className={styles['intro__text']}>
        Nuestra aplicación está diseñada para facilitar la planificación y el
        control de proyectos de construcción, haciendo estos procesos
        eficientes, claros y accesibles para todos. Especialmente pensada para
        potenciar a pequeños y medianos constructores.
      </p>
      <div className={styles['intro__line']}>
        <span></span>
      </div>
    </section>
  );
};

export default Intro;
