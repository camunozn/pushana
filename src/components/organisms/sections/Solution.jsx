import React from 'react';
import RevealOnScroll from '../../atoms/reveal-on-scroll/RevealOnScroll';
import styles from './Solution.module.css';

const flowSteps = [
  {
    icon: <i className="fa-solid fa-earth-americas"></i>,
    label: 'Donante',
    sub: 'Cooperación',
  },
  {
    icon: <i className="fa-solid fa-shield-heart"></i>,
    label: 'Subsidio',
    sub: 'Año 1 financiado',
  },
  {
    icon: <i className="fa-solid fa-chart-line"></i>,
    label: 'Adopción',
    sub: 'Uso del seguro',
  },
  {
    icon: <i className="fa-solid fa-arrows-rotate"></i>,
    label: 'Renovación',
    sub: 'Valor percibido',
  },
  {
    icon: <i className="fa-regular fa-star"></i>,
    label: 'Autonomía',
    sub: 'Pago propio',
  },
];

const phases = [
  {
    year: 'Año 1 · Diseño',
    pct: '100',
    sub: '% donante',
    desc: 'Alianzas · Infraestructura tecnológica · Enrolamiento',
  },
  {
    year: 'Año 2 · Piloto',
    pct: '85',
    sub: '% donante',
    desc: '500 personas · Datos de conversión · Copago simbólico',
  },
  {
    year: 'Año 3 · Transición',
    pct: '50',
    sub: '% donante',
    desc: '20–40% pagan autónomamente · Donantes cofinancian',
  },
  {
    year: 'Año 4+ · Escala',
    pct: '0',
    sub: '% subsidio',
    desc: 'Mercado comercial · Réplica regional · Donante se retira',
  },
];

const Solution = () => {
  return (
    <section id="solucion" className={styles['solution-section']}>
      <div className="section-wrap" style={{ position: 'relative' }}>
        <RevealOnScroll>
          <div className={`${'section-label'} ${styles['section-label']}`}>
            02 — Nuestra solución
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <h2 className={`${'section-title'} ${styles['section-title']}`}>
            Convertimos ayuda temporal
            <br />
            <em>en protección sostenible</em>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <p className={`${'section-body'} ${styles['section-body']}`}>
            Nuestro modelo transforma el primer año financiado por donantes en
            un mecanismo de adopción, validación de demanda y transición hacia
            sostenibilidad de mercado.
          </p>
        </RevealOnScroll>

        {/* Flow Track - Staggered horizontal reveal */}
        <div className={styles['flow-track']}>
          {flowSteps.map((step, index) => (
            <RevealOnScroll key={index} delay={300 + index * 100}>
              <div className={styles['flow-step']}>
                <div className={styles['flow-icon']}>{step.icon}</div>
                <div className={styles['flow-label']}>{step.label}</div>
                <div className={styles['flow-sublabel']}>{step.sub}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Phases Grid - Staggered card reveal */}
        <div className={styles['phases-grid']}>
          {phases.map((phase, index) => (
            <RevealOnScroll key={index} delay={500 + index * 150}>
              <div className={styles['phase-card']}>
                <div className={styles['phase-year']}>{phase.year}</div>
                <div className={styles['phase-pct']}>
                  {phase.pct}
                  <sub>{phase.sub}</sub>
                </div>
                <div className={styles['phase-desc']}>{phase.desc}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
