import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';
import Navbar from './Navbar/Navbar';
import logoImg from '../../assets/logo/logo-transparent-bg.png';
import styles from './Header.module.css';

const Header = () => {
  const isSticky = useSelector(state => state.isSticky);
  const [showNav, setShowNav] = useState(false);

  const toggleShowNav = () => {
    setShowNav(!showNav);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header className={`${styles.header} ${isSticky && styles.sticky}`}>
      <div className={styles['header__container']}>
        <div className={styles['header__logo-box']} onClick={scrollToTop}>
          <img
            className={styles['header__logo-img']}
            src={logoImg}
            alt="Pushana logo"
          />
          <span className={styles['header__logo-text']}>Pushana</span>
        </div>
        <Navbar showNav={showNav} />
        <button className={styles['btn--mobile']} onClick={toggleShowNav}>
          <i className={`fa-solid fa-${showNav ? 'xmark' : 'bars'}`}></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
