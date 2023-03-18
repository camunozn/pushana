import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../molecules/Header/Navbar';
import LogoBox from '../../molecules/Header/LogoBox';
import ButtonMobile from '../../molecules/Header/ButtonMobile';
import logoImg from '../../../assets/logo/logo-transparent-bg.png';
import styles from './Header.module.css';

const Header = props => {
  const isSticky = useSelector(state => state.isSticky);
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const linksList = props.linksList;

  return (
    <header className={`${styles.header} ${isSticky && styles.sticky}`}>
      <div className={styles['header__container']}>
        <LogoBox image={logoImg} text="Pushana" />
        <Navbar linksList={linksList} openNav={openNav} />
        <ButtonMobile buttonHandler={toggleNav} openNav={openNav} />
      </div>
    </header>
  );
};

export default Header;
