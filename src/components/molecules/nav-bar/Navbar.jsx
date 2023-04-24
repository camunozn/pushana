import React from 'react';
import Button from '../../atoms/button/Button';
import styles from './Navbar.module.css';

const Navbar = props => {
  const linksList = props.linksList;

  return (
    <div className={styles.navbar}>
      <ul
        className={`${styles['navbar__list']} ${
          props.openNav && styles.visible
        }`}
      >
        {linksList.map(link => (
          <li key={link.name}>
            <a className={styles['navbar__link']} href={link.link}>
              {link.name}
            </a>
          </li>
        ))}
        <li>
          <Button text="Prueba ahora" style="primary" align="center" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
