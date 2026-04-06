import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
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
    <footer>
      <div className={styles['footer-inner']}>
        <div className={styles['footer-top']}>
          <div>
            <div
              className={styles['footer-brand-name']}
              onClick={e => handleScroll(e, 'hero')}
              style={{ cursor: 'pointer' }}
            >
              Pushana
            </div>
            <div className={styles['footer-brand-tag']}>
              De la asistencia a la autonomía
            </div>
            <p className={styles['footer-brand-desc']}>
              Plataforma de innovación social y protección financiera para
              personas migrantes y refugiadas en Ecuador y América Latina.
            </p>
          </div>
          <div className={styles['footer-col']}>
            <div className={styles['footer-col-title']}>Modelo</div>
            <ul>
              <li>
                <a
                  href="#problema"
                  onClick={e => handleScroll(e, 'problema')}
                  style={{ cursor: 'pointer' }}
                >
                  El problema
                </a>
              </li>
              <li>
                <a
                  href="#solucion"
                  onClick={e => handleScroll(e, 'solucion')}
                  style={{ cursor: 'pointer' }}
                >
                  Nuestra solución
                </a>
              </li>
              <li>
                <a
                  href="#impacto"
                  onClick={e => handleScroll(e, 'impacto')}
                  style={{ cursor: 'pointer' }}
                >
                  Impacto
                </a>
              </li>
              <li>
                <a
                  href="#evidencia"
                  onClick={e => handleScroll(e, 'evidencia')}
                  style={{ cursor: 'pointer' }}
                >
                  Evidencia
                </a>
              </li>
            </ul>
          </div>
          <div className={styles['footer-col']}>
            <div className={styles['footer-col-title']}>Servicios</div>
            <ul>
              <li>
                <a
                  href="#servicios"
                  onClick={e => handleScroll(e, 'servicios')}
                  style={{ cursor: 'pointer' }}
                >
                  Microseguros inclusivos
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  onClick={e => handleScroll(e, 'servicios')}
                  style={{ cursor: 'pointer' }}
                >
                  Modelos de transición
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  onClick={e => handleScroll(e, 'servicios')}
                  style={{ cursor: 'pointer' }}
                >
                  Pilotos subsidiados
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  onClick={e => handleScroll(e, 'servicios')}
                  style={{ cursor: 'pointer' }}
                >
                  Inteligencia de impacto
                </a>
              </li>
            </ul>
          </div>
          <div className={styles['footer-col']}>
            <div className={styles['footer-col-title']}>Contacto</div>
            <ul>
              <li>
                <a href="mailto:ccadena@pushana.com">
                  <i className="fa-solid fa-envelope"></i> ccadena@pushana.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/pushana"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i> /company/pushana
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i> @pushana
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-square-twitter"></i> @pushana
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles['footer-bottom']}>
          <span>
            Copyright &copy; 2026 Pushana S.A.S. Todos los derechos reservados.
            Quito - Ecuador
          </span>
          <span>
            ODS 1 · 3 · 8 · 10 · 17 · Movilidad humana · Inclusión financiera
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
