import React from 'react';
import ButtonMobile from '../../atoms/button-mobile/ButtonMobile';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <nav>
      <a href="/" className={styles['nav-logo']}>
        Pushana
      </a>
      <ul
        className={`${styles['nav-links']} ${props.openNav && styles.visible}`}
      >
        {props.linksList.map(link => (
          <li key={link.name}>
            <Link to={link.link} onClick={props.toggleNav}>
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="#cta-final"
            className={styles['nav-cta']}
            onClick={props.toggleNav}
          >
            Conversemos
          </a>
        </li>
      </ul>
      <ButtonMobile buttonHandler={props.toggleNav} openNav={props.openNav} />
    </nav>
  );
};

export default Navbar;
