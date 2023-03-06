import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar/Navbar';
import styles from './Header.module.css';
import logoImg from '../../assets/logo/logo-purple-transparent-bg.png';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const isSticky = useSelector(state => state.isSticky);

  const toggleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className={`${styles.header} ${isSticky && styles.sticky}`}>
      <div className={styles.container}>
        <a className={styles['brand']} href="/">
          <img
            className={styles['brand-logo']}
            src={logoImg}
            alt="Pushana logo"
          />
          <span className={styles['brand-name']}>Pushana</span>
        </a>
        <Navbar showNav={showNav} />
        <button className={styles['btn-mobile']} onClick={toggleShowNav}>
          <i className={`fa-solid fa-${showNav ? 'xmark' : 'bars'}`}></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
