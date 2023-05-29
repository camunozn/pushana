import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import styles from './LogoBox.module.css';
import { Link, useLocation } from 'react-router-dom';

const LogoBox = props => {
  const { pathname } = useLocation();

  const scrollToTop = () => {
    if (pathname === '/') scroll.scrollToTop();
  };

  return (
    <Link
      reloadDocument
      to={props.link}
      className={styles['logo-box']}
      onClick={scrollToTop}
    >
      <img className={styles['logo__img']} src={props.image} alt="Logo image" />
      <span className={styles['logo__text']}>{props.text}</span>
    </Link>
  );
};

export default LogoBox;
