import React from 'react';
import RevealOnScroll from '../../atoms/reveal-on-scroll/RevealOnScroll';
import styles from './Allies.module.css';

const alliesData = [
  {
    icon: <i className="fa-solid fa-earth-americas"></i>,
    title: 'Donantes y cooperación internacional',
    sub: 'Inversión con sostenibilidad y salida responsable del subsidio',
  },
  {
    icon: <i className="fa-solid fa-building-shield"></i>,
    title: 'Aseguradoras',
    sub: 'Reducción del CAC y demanda validada en segmentos nuevos',
  },
  {
    icon: <i className="fa-solid fa-building-columns"></i>,
    title: 'Gobiernos',
    sub: 'Protección social sostenible y modelos de inclusión financiera',
  },
  {
    icon: <i className="fa-solid fa-handshake"></i>,
    title: 'ONGs y sector privado',
    sub: 'Canales de distribución y alianzas de impacto a escala',
  },
];

const Allies = () => {
  return (
    <section id="aliados" className={styles['allies-section']}>
      <div className="section-wrap">
        <RevealOnScroll>
          <div className="section-label">04 — Para quién trabajamos</div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <h2 className="section-title">
            Nuestros aliados
            <br />
            <em>estratégicos</em>
          </h2>
        </RevealOnScroll>

        <div className={styles['aliados-grid']}>
          {alliesData.map((aliado, index) => (
            <RevealOnScroll key={index} delay={(index + 1) * 100}>
              <div className={styles['aliado-card']}>
                <span className={styles['aliado-icon']}>{aliado.icon}</span>
                <div className={styles['aliado-title']}>{aliado.title}</div>
                <div className={styles['aliado-sub']}>{aliado.sub}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Allies;
