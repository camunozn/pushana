import React, { useState } from 'react';
import Navbar from '../../molecules/nav-bar/Navbar';
import styles from './Header.module.css';

const Header = props => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const linksList = props.linksList;

  return (
    <header className={styles.header}>
      <div className={styles['header__container']}>
        <Navbar linksList={linksList} openNav={openNav} toggleNav={toggleNav} />
      </div>
    </header>
  );
};

export default Header;
