import React from 'react';
import styles from './Hero.module.css';

const Hero = props => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles['hero-bg-circle']} ${styles['c1']}`}></div>
      <div className={`${styles['hero-bg-circle']} ${styles['c2']}`}></div>
      <div className={`${styles['hero-bg-circle']} ${styles['c3']}`}></div>

      <div className={styles['hero-eyebrow']}>
        Ecuador · 2026 · Innovación financiera e impacto
      </div>

      <h1 className={styles['hero-h1']}>
        Transformamos asistencia
        <em>en autonomía sostenible</em>
      </h1>

      <p className={styles['hero-sub']}>
        Conectamos acción humanitaria, microseguros e innovación financiera para
        proteger ingresos, reducir vulnerabilidad y construir libertad
        económica.
      </p>

      <div className={styles['hero-ctas']}>
        <a href="#cta-final" className={styles['btn-primary']}>
          Solicitar una alianza →
        </a>
        <a href="#solucion" className={styles['btn-outline']}>
          Conocer nuestro modelo
        </a>
      </div>

      <p className={styles['hero-note']}>
        Diseñado para donantes · aseguradoras · gobiernos · organizaciones de
        impacto
      </p>

      <div className={styles['hero-scroll']}>Scroll</div>
    </section>
  );
};

export default Hero;
