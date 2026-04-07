import React from 'react';
import RevealOnScroll from '../../atoms/reveal-on-scroll/RevealOnScroll';
import styles from './Cta.module.css';

const Cta = () => {
  return (
    <section id="cta-final" className={styles['cta-section']}>
      <div className="section-wrap">
        <RevealOnScroll>
          <div className={`${'section-label'} ${styles['section-label']}`}>
            10 — Conversemos
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <h2 className={styles['cta-title']}>
            Construyamos juntos
            <br />
            sistemas que empoderan
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <p className={styles['cta-sub']}>
            Hablemos sobre cómo transformar la asistencia en autonomía
            sostenible para las comunidades que más lo necesitan.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={300}>
          <a href="mailto:ccadena@pushana.com" className={styles['btn-white']}>
            Agenda una conversación →
          </a>
        </RevealOnScroll>

        <RevealOnScroll delay={400}>
          <p className={styles['cta-contact']}>
            ccadena@pushana.com &nbsp;·&nbsp; pushana.com
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Cta;
