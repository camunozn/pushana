import React from 'react';
import RevealOnScroll from '../../atoms/reveal-on-scroll/RevealOnScroll';
import styles from './Problem.module.css';

const Problem = () => {
  return (
    <section id="problema" className={styles['problem-section']}>
      <div className="section-wrap">
        {/* Header Section */}
        <RevealOnScroll>
          <div className="section-label">01 — El problema</div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <h2 className="section-title">
            La asistencia salva vidas,
            <br />
            <em>pero no siempre construye futuro</em>
          </h2>
        </RevealOnScroll>

        <div className={styles['problema-grid']}>
          {/* Left Side: Narrative Text */}
          <RevealOnScroll delay={200}>
            <div className={styles['problema-text']}>
              <p>
                Millones de personas en situación de vulnerabilidad dependen de
                esquemas temporales de ayuda que, aunque esenciales en momentos
                de crisis, no garantizan continuidad, protección financiera ni
                autonomía de largo plazo.
              </p>

              <div className={styles['problema-highlight']}>
                <p>Cuando los fondos se terminan, la protección desaparece.</p>
              </div>

              <p>
                En Ecuador, más de 400,000 personas migrantes venezolanas viven
                en informalidad. Solo 5% tiene acceso a algún tipo de seguro. Ir
                a una consulta médica o asistir a una capacitación cuesta entre
                8 y 15 dólares en ingreso perdido — una barrera que el sistema
                actual no resuelve.
              </p>

              <p className={styles['pushana-cta']}>
                Pushana nace para cerrar esa brecha.
              </p>
            </div>
          </RevealOnScroll>

          {/* Right Side: Statistics Cards */}
          <div className={styles['problema-stats']}>
            <RevealOnScroll delay={300}>
              <div className={styles['stat-card']}>
                <div className={styles['stat-number']}>
                  400<span>K+</span>
                </div>
                <div className={styles['stat-label']}>
                  personas migrantes venezolanas en Ecuador
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <div className={styles['stat-card']}>
                <div className={styles['stat-number']}>
                  &lt;<span>5</span>%
                </div>
                <div className={styles['stat-label']}>
                  tienen acceso a algún microseguro en el primer año
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={500}>
              <div className={styles['stat-card']}>
                <div className={styles['stat-number']}>
                  $8–<span>15</span>
                </div>
                <div className={styles['stat-label']}>
                  ingreso diario perdido por ir al médico o capacitarse
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
