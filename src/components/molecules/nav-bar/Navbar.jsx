import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Button from '../../atoms/button/Button';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = props => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToSection = section => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.navbar}>
      <ul
        className={`${styles['navbar__list']} ${
          props.openNav && styles.visible
        }`}
      >
        {props.linksList.map(link => (
          <li key={link.name}>
            <Link className={styles['navbar__link']} to={link.link}>
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <Button text="Contáctenos" style="primary" align="center" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
