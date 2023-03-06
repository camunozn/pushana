import React from 'react';
import styles from './Navbar.module.css';

const Navbar = props => {
  return (
    <div className={styles.navbar}>
      <ul
        className={`${styles['navbar-list']} ${
          props.showNav && styles.visible
        }`}
      >
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
    </div>
  );
};

export default Navbar;
