import React from 'react';
import Card from '../UI/Card';
import styles from './Intro.module.css';

const Intro = () => {
  return (
    <section id="section-intro" className={styles['intro']}>
      <div className={styles['intro__container']}>
        <div className={styles['intro__text-box']}>
          <h2 className={styles['intro__heading']}>
            Cambiamos la forma de planificar y controlar tus proyectos de
            construcción.
          </h2>
          <p className={styles['intro__text']}>
            Nuestra aplicación está diseñada para facilitar la planificación y
            el control de proyectos de construcción, haciendo a estos procesos
            eficientes, claros y accesibles para todos. Especialmente pensada
            para potenciar a pequeños y medianos constructores.
          </p>
        </div>
        <div className={styles['intro__cards-box']}>
          <Card
            icon="fa-solid fa-wand-magic-sparkles"
            title="Claro e intuitivo"
            style="secondary"
            text="Desarrollamos una interfáz minimalista, clara y fácil de entender. Seguimos el flujo natural de los proyectos de construcción."
          />
          <Card
            icon="fa-solid fa-gauge-high"
            title="Eficiente y ágil"
            style="secondary"
            text="Eliminamos tareas manuales y reprocesos. Enfocamos nuestra aplicación en el uso eficiente del tiempo, las metodologías ágiles y el trabajo inteligente."
          />
          <Card
            icon="fa-solid fa-magnifying-glass-chart"
            title="Decisiones basas en datos"
            style="secondary"
            text="Incluimos recursos que facilitan y promueven el análisis de la información. Hacemos énfasis en la toma de decisiones basadas en datos."
          />
          <Card
            icon="fa-solid fa-hand-holding-dollar"
            title="Versátil y accesible"
            style="secondary"
            text="Tomamos en cuenta la naturaleza temporal de los proyectos. Solo paga por los usuarios y el tiempo que necesites."
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
