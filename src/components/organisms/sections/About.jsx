import React from 'react';
import RevealOnScroll from '../../atoms/reveal-on-scroll/RevealOnScroll';
import styles from './About.module.css';

const values = [
  {
    name: 'Dignidad',
    desc: 'La protección debe preservar la capacidad de decisión de cada persona.',
  },
  {
    name: 'Libertad',
    desc: 'Trabajamos para que las personas recuperen control sobre su presente y su futuro.',
    color: 'var(--gold)',
  },
  {
    name: 'Sostenibilidad',
    desc: 'Creamos modelos que sobreviven más allá de los ciclos de donación.',
  },
  {
    name: 'Corresponsabilidad',
    desc: 'La transformación ocurre cuando sector público, privado y cooperación trabajan juntos.',
    color: 'var(--plum)',
  },
];

const About = () => {
  return (
    <section id="about" className={styles['about-section']}>
      <div className="section-wrap">
        <RevealOnScroll>
          <div className="section-label">07 — Quiénes somos</div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <h2 className="section-title">
            Una plataforma de
            <br />
            <em>transformación sistémica</em>
          </h2>
        </RevealOnScroll>

        <div className={styles['about-grid']}>
          {/* Narrative Text */}
          <RevealOnScroll delay={200}>
            <div className={styles['about-text']}>
              <p>
                Pushana es una plataforma de innovación social y protección
                financiera que conecta la acción humanitaria con mecanismos
                sostenibles de mercado.
              </p>
              <p>
                Nacimos con la convicción de que la asistencia temporal, aunque
                esencial en contextos de vulnerabilidad, debe evolucionar hacia
                modelos que promuevan autonomía, resiliencia y libertad
                económica.
              </p>
              <p>
                Trabajamos en la intersección entre cooperación internacional,
                sector público, sector privado y aseguradoras para construir
                sistemas escalables que transformen protección en oportunidad.
              </p>

              <blockquote className={styles['about-quote']}>
                "Combinamos experiencia en políticas públicas, operaciones
                humanitarias y mecanismos financieros sostenibles para
                transformar sistemas de protección social."
              </blockquote>
            </div>
          </RevealOnScroll>

          {/* Values List */}
          <div className={styles['about-values']}>
            {values.map((value, index) => (
              <RevealOnScroll key={index} delay={300 + index * 100}>
                <div className={styles['value-row']}>
                  <div
                    className={styles['value-dot']}
                    style={value.color ? { background: value.color } : {}}
                  />
                  <div>
                    <div className={styles['value-name']}>{value.name}</div>
                    <div className={styles['value-desc']}>{value.desc}</div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
