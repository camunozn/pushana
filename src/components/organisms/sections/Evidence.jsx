import React from 'react';
import RevealOnScroll from '../../atoms/reveal-on-scroll/RevealOnScroll';
import styles from './Evidence.module.css';

const evidenceData = [
  {
    source: 'BIMA · Ghana / Tanzania',
    pct: '25–35',
    suffix: '%',
    text: 'Conversión al pago voluntario. Los que activaron una reclamación renovaron 2,3× más que los que no lo hicieron.',
  },
  {
    source: 'Seguros Bolívar · Colombia',
    pct: '30–40',
    suffix: '%',
    text: 'Migrantes venezolanos. Factor clave: copago simbólico desde el enrolamiento genera identidad de asegurado.',
  },
  {
    source: 'BID · América Latina',
    pct: '+15–25',
    suffix: '%',
    text: 'Mayor retención con 8 o más horas de educación financiera, según estudio de control del Banco Interamericano.',
  },
];

const Evidence = () => {
  return (
    <section id="evidencia" className={styles['evidence-section']}>
      <div className="section-wrap">
        <RevealOnScroll>
          <div className="section-label">06 — Evidencia global</div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <h2 className="section-title">
            La tasa del 20–40%
            <br />
            <em>no es un supuesto</em>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <p className="section-body">
            Nuestra hipótesis de conversión está basada en evidencia documentada
            de programas similares en mercados comparables.
          </p>
        </RevealOnScroll>

        <div className={styles['evidencia-grid']}>
          {evidenceData.map((item, index) => (
            <RevealOnScroll key={index} delay={300 + index * 150}>
              <div className={styles['evidence-card']}>
                <div className={styles['evidence-source']}>{item.source}</div>
                <div className={styles['evidence-pct']}>
                  {item.pct}
                  <span>{item.suffix}</span>
                </div>
                <p className={styles['evidence-text']}>{item.text}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Evidence;
