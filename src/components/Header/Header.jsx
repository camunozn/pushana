import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar/Navbar';
import styles from './Header.module.css';
import logoImg from '../../assets/logo/logo-transparent-bg.png';

const Header = () => {
  const isSticky = useSelector(state => state.isSticky);
  const [showNav, setShowNav] = useState(false);

  const toggleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className={`${styles.header} ${isSticky && styles.sticky}`}>
      <div className={styles['header__container']}>
        <a className={styles['header__logo-box']} href="/">
          <img
            className={styles['header__logo-img']}
            src={logoImg}
            alt="Pushana logo"
          />
          <span className={styles['header__logo-text']}>Pushana</span>
        </a>
        <Navbar showNav={showNav} />
        <button className={styles['btn--mobile']} onClick={toggleShowNav}>
          <i className={`fa-solid fa-${showNav ? 'xmark' : 'bars'}`}></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
