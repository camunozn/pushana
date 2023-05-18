import React, { useState } from 'react';
import Navbar from '../../molecules/nav-bar/Navbar';
import LogoBox from '../../molecules/logo-box/LogoBox';
import ButtonMobile from '../../atoms/button-mobile/ButtonMobile';
import logoImg from '../../../assets/logo/logo-transparent-bg.png';
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
        <LogoBox image={logoImg} text="Pushana" />
        <Navbar linksList={linksList} openNav={openNav} toggleNav={toggleNav} />
        <ButtonMobile buttonHandler={toggleNav} openNav={openNav} />
      </div>
    </header>
  );
};

export default Header;
