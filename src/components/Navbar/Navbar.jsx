import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import styles from './Navbar.module.css';
import logoImg from '../../assets/logo/logo-purple-transparent-bg.png';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const isSticky = useSelector(state => state.isSticky);

  const toggleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className={`${styles.navbar} ${isSticky && styles.sticky}`}>
      <div className={styles.container}>
        <a className={styles['navbar-brand']} href="/">
          <img
            className={styles['navbar-brand__logo']}
            src={logoImg}
            alt="Pushana logo"
          />
          <span className={styles['navbar-brand__name']}>Pushana</span>
        </a>
        <ul className={`${styles['navbar-list']} ${showNav && styles.visible}`}>
          <li className={styles['navbar-list__item']}>
            <a className={styles['navbar-link']} href="#">
              Productos
            </a>
          </li>
          <li className={styles['navbar-list__item']}>
            <a className={styles['navbar-link']} href="#">
              Comunidad
            </a>
          </li>
          <li className={styles['navbar-list__item']}>
            <a className={styles['navbar-link']} href="#">
              Blog
            </a>
          </li>
          <li className={styles['navbar-list__item']}>
            <a className={styles['navbar-link']} href="#">
              Nosotros
            </a>
          </li>
          <li className={styles['navbar-list__item']}>
            <a className={`btn btn__primary ${styles['navbar-cta']}`} href="#">
              Registro anticipado
            </a>
          </li>
        </ul>
        <div className={styles['navbar-mobile']}>
          <button
            className={styles['navbar-mobile__btn-mobile']}
            onClick={toggleShowNav}
          >
            <i className={`fa-solid fa-${showNav ? 'xmark' : 'bars'}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
