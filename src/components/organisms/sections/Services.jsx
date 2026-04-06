import React from 'react';
import RevealOnScroll from '../../atoms/reveal-on-scroll/RevealOnScroll';
import styles from './Services.module.css';

const servicesData = [
  {
    num: '01',
    icon: <i className="fa-solid fa-shield-heart"></i>,
    tag: 'Inclusive Protection Design',
    title: 'Diseño de microseguros inclusivos',
    body: "Creamos productos paramétricos adaptados a salud, ingresos, movilidad humana y protección familiar. Diseño actuarial con MIC Global y cobertura Lloyd's Syndicate.",
  },
  {
    num: '02',
    icon: <i className="fa-solid fa-arrows-rotate"></i>,
    tag: 'Humanitarian Transition Models',
    title: 'Modelos de transición humanitaria',
    body: 'Diseñamos estrategias para pasar de asistencia directa a sistemas sostenibles. Arquitectura de salida programada del subsidio con evidencia de conversión.',
  },
  {
    num: '03',
    icon: <i className="fa-solid fa-seedling"></i>,
    tag: 'Donor-funded pilot programs',
    title: 'Pilotos financiados por donantes',
    body: 'Implementamos pilotos de primer año subsidiado para evaluar uso, valor percibido y tasa de renovación. El donante no financia asistencia — financia la demostración de un mercado.',
  },
  {
    num: '04',
    icon: <i className="fa-solid fa-chart-line"></i>,
    tag: 'Impact Intelligence',
    title: 'Inteligencia de impacto',
    body: 'Medimos uso, continuidad, resultados sociales y retorno de inversión. Dashboard en tiempo real para donantes. Evidencia para escalamiento regional.',
  },
];

const Services = () => {
  return (
    <section id="servicios" className={styles['services-section']}>
      <div className="section-wrap">
        <RevealOnScroll>
          <div className="section-label">03 — Qué hacemos</div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <h2 className="section-title">
            Servicios de
            <br />
            <em>transformación sistémica</em>
          </h2>
        </RevealOnScroll>

        <div className={styles['services-grid']}>
          {servicesData.map((service, index) => (
            <RevealOnScroll key={index} delay={(index + 1) * 100}>
              <div className={styles['service-card']}>
                <span className={styles['service-num']}>{service.num}</span>
                <span className={styles['service-icon']}>{service.icon}</span>
                <span className={styles['service-tag']}>{service.tag}</span>
                <div className={styles['service-title']}>{service.title}</div>
                <p className={styles['service-body']}>{service.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
