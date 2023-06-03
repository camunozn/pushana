import React from 'react';
import styles from './LogoBox.module.css';

const LogoBox = props => {
  return (
    <a className={styles['logo-box']} href={props.link}>
      <img className={styles['logo__img']} src={props.image} alt="Logo image" />
      <div>
        <span className={styles['logo__text']}>{props.text}</span>
        <p className={styles['logo__slogan']}>{props.slogan}</p>
      </div>
    </a>
  );
};

export default LogoBox;
