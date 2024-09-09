import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import imgBrand from '../../../assets/logo/logo-name-transparent-bg.png';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className={styles.footer}>
      <div className={styles['footer__container']}>
        <div className={styles['footer__logo-col']}>
          <div className={styles['footer__brand-logo']} onClick={scrollToTop}>
            <img src={imgBrand} alt="Pushana brand" />
          </div>
          <ul className={styles['footer__social-list']}>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-square-twitter"></i>
              </a>
            </li>
          </ul>
          <p className={styles['footer__copyright']}>
            Copyright &copy; 2024 Pushana S.A.S. Todos los derechos reservados
          </p>
        </div>
        <div className={styles['footer__contact-col']}>
          <p className={styles['footer__heading']}>Contáctenos</p>
          <address className={styles['footer__contact-info']}>
            <p className={styles['footer__address']}>
              Av. Eugenio Espejo 2410.
              <br />
              Quito &mdash; Ecuador
            </p>
            <p className={styles['footer__contact']}>
              <a className={styles['footer__link']} href="tel:+593998043941">
                +593 998043941
              </a>
            </p>
            <br />
            <p className={styles['footer__contact']}>
              <a
                className={styles['footer__link']}
                href="mailto:camunozn@pushana.com"
              >
                camunozn@pushana.com
              </a>
            </p>
          </address>
        </div>
        <div className={styles['footer__account-col']}>
          <p className={styles['footer__heading']}>Mapa del sitio</p>
          <ul className={styles['footer__nav-list']}>
            <li>
              <Link className={styles['footer__link']} to={'/'}>
                Gestión de Proyectos
              </Link>
            </li>
            <li>
              <Link className={styles['footer__link']} to={'/'}>
                Soluciones a medida
              </Link>
            </li>
            <li>
              <Link className={styles['footer__link']} to={'/'}>
                Capacitaciones
              </Link>
            </li>
            <li>
              <Link className={styles['footer__link']} to={'/about'}>
                Nosotros
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles['footer__company-col']}>
          <p className={styles['footer__heading']}>Nuestra empresa</p>
          <ul className={styles['footer__nav-list']}>
            <li>
              <Link className={styles['footer__link']} to={'/'}>
                Purple Sky Technologies
              </Link>
            </li>
            <li>
              <Link className={styles['footer__link']} to={'/about'}>
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link className={styles['footer__link']} to={'/about'}>
                Contacto
              </Link>
            </li>
            <li>
              <Link className={styles['footer__link']} to={'/about'}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
