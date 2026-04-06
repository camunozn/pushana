import React from 'react';
import styles from './Hero.module.css';

const Hero = props => {
  const handleScroll = (e, targetId) => {
    // 1. Prevent the default <a> tag "jump" behavior
    e.preventDefault();

    // 2. Remove the '#' from the string to get the actual ID
    const id = targetId.replace('#', '');
    const element = document.getElementById(id);

    if (element) {
      // 3. Scroll to the element smoothly
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

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
        <a
          href="#cta-final"
          className={styles['btn-primary']}
          onClick={e => handleScroll(e, 'cta-final')}
        >
          Solicitar una alianza →
        </a>
        <a
          href="#solucion"
          className={styles['btn-outline']}
          onClick={e => handleScroll(e, 'solucion')}
        >
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
