import React from 'react';
import styles from './Navbar.module.css';
import logoImg from '../../assets/logo/logo-purple-transparent-bg.png';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a className={styles['navbar-brand']} href="/">
        <img
          className={styles['navbar-brand__logo']}
          src={logoImg}
          alt="Pushana logo"
        />
        <span className={styles['navbar-brand__name']}>Pushana</span>
      </a>
    </div>
  );
};

export default Navbar;
