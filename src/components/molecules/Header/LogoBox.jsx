import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import styles from './LogoBox.module.css';

const LogoBox = props => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className={styles['logo-box']} onClick={scrollToTop}>
      <img className={styles['logo__img']} src={props.image} alt="Logo image" />
      <span className={styles['logo__text']}>{props.text}</span>
    </div>
  );
};

export default LogoBox;
