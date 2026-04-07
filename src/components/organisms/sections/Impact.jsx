import React from 'react';
import RevealOnScroll from '../../atoms/reveal-on-scroll/RevealOnScroll';
import styles from './Impact.module.css';

const impactData = [
  {
    num: '500',
    suffix: '+',
    label: (
      <>
        personas en piloto
        <br />
        Ecuador 2026
      </>
    ),
  },
  {
    num: '20–40',
    suffix: '%',
    label: (
      <>
        conversión proyectada
        <br />a pago autónomo
      </>
    ),
  },
  {
    num: '3',
    suffix: 'x',
    label: (
      <>
        retorno social
        <br />
        estimado
      </>
    ),
  },
];

const Impact = () => {
  return (
    <section id="impacto" className={styles['impact-section']}>
      <div className="section-wrap" style={{ position: 'relative' }}>
        <RevealOnScroll>
          <div className={`${styles['section-label']} ${'section-label'}`}>
            05 — Impacto
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <h2 className={`${styles['section-title']} ${'section-title'}`}>
            Impacto que
            <br />
            trasciende la asistencia
          </h2>
        </RevealOnScroll>

        <div className={styles['impact-grid']}>
          {impactData.map((item, index) => (
            <RevealOnScroll key={index} delay={200 + index * 150}>
              <div className={styles['impact-item']}>
                <div className={styles['impact-num']}>
                  {item.num}
                  <span>{item.suffix}</span>
                </div>
                <div className={styles['impact-label']}>{item.label}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
