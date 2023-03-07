import React from 'react';
import styles from './Navbar.module.css';

const Navbar = props => {
  return (
    <div className={styles.navbar}>
      <ul
        className={`${styles['navbar__list']} ${
          props.showNav && styles.visible
        }`}
      >
        <li>
          <a className={styles['navbar__link']} href="#">
            Productos
          </a>
        </li>
        <li>
          <a className={styles['navbar__link']} href="#">
            Comunidad
          </a>
        </li>
        <li>
          <a className={styles['navbar__link']} href="#">
            Blog
          </a>
        </li>
        <li>
          <a className={styles['navbar__link']} href="#">
            Nosotros
          </a>
        </li>
        <li>
          <a className={`btn btn--primary ${styles['navbar__cta']}`} href="#">
            Registro anticipado
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
