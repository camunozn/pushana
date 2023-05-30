import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import styles from './LogoBox.module.css';
import { Link, useLocation } from 'react-router-dom';

const LogoBox = props => {
  return (
    <a className={styles['logo-box']} href={props.link}>
      <img className={styles['logo__img']} src={props.image} alt="Logo image" />
      <span className={styles['logo__text']}>{props.text}</span>
    </a>
  );
};

export default LogoBox;
