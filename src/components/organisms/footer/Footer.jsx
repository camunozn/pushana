import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import imgBrand from '../../../assets/logo/logo-name-transparent-bg.png';
import styles from './Footer.module.css';
import LogoBox from '../../atoms/logo-box/LogoBox';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer>
      <div className={styles['footer-inner']}>
        <div className={styles['footer-top']}>
          <div>
            <div className={styles['footer-brand-name']}>Pushana</div>
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
                <a href="#problema">El problema</a>
              </li>
              <li>
                <a href="#solucion">Nuestra solución</a>
              </li>
              <li>
                <a href="#impacto">Impacto</a>
              </li>
              <li>
                <a href="#evidencia">Evidencia</a>
              </li>
            </ul>
          </div>
          <div className={styles['footer-col']}>
            <div className={styles['footer-col-title']}>Servicios</div>
            <ul>
              <li>
                <a href="#servicios">Microseguros inclusivos</a>
              </li>
              <li>
                <a href="#servicios">Modelos de transición</a>
              </li>
              <li>
                <a href="#servicios">Pilotos subsidiados</a>
              </li>
              <li>
                <a href="#servicios">Impact intelligence</a>
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
