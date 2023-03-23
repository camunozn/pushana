import React, { useRef } from 'react';
import HeadingLarge from '../../components/molecules/UI/HeadingLarge';
import CardsBox from '../../components/molecules/UI/CardsBox';
import styles from './Introduction.module.css';

const Introduction = () => {
  const heading = {
    title:
      'Cambiamos la forma de planificar y controlar tus proyectos de construcción.',
    text: 'Nuestra aplicación está diseñada para hacer los procesos de planificación y control fáciles, eficientes y accesibles para todos.',
  };

  const cardsList = [
    {
      icon: 'fa-solid fa-wand-magic-sparkles',
      title: 'Simple e intuitivo',
      style: 'secondary',
      text: 'Desarrollamos una interfaz minimalista, clara y fácil de entender. Seguimos el flujo natural de los proyectos de construcción adaptado a la realidad nacional.',
    },
    {
      icon: 'fa-solid fa-gauge-high',
      title: 'Ágil y eficiente',
      style: 'secondary',
      text: 'Eliminamos tareas manuales y reprocesos. Enfocamos nuestra aplicación en el uso eficiente del tiempo, las metodologías ágiles y el trabajo inteligente.',
    },
    {
      icon: 'fa-solid fa-magnifying-glass-chart',
      title: 'Decisiones basadas en datos',
      style: 'secondary',
      text: 'Incluimos recursos que facilitan y promueven el análisis de la información. Hacemos énfasis en la toma de decisiones basadas en datos.',
    },
    {
      icon: 'fa-solid fa-hand-holding-dollar',
      title: 'Versátil y accesible',
      style: 'secondary',
      text: 'Tomamos en cuenta la naturaleza temporal de los proyectos. Solo suscríbete por el tiempo y para los usuarios que necesites. Sin ataduras.',
    },
  ];

  return (
    <section id="section-introduction" className={styles['intro']}>
      <div className={styles['intro__container']}>
        <HeadingLarge title={heading.title} text={heading.text} />
        <CardsBox cardsList={cardsList} />
      </div>
    </section>
  );
};

export default Introduction;
