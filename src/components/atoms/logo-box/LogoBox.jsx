import React from 'react';
import styles from './LogoBox.module.css';

const LogoBox = props => {
  const text = 'Pushana';
  const slogan = 'De la asistencia a la autonomía';
  return (
    <a className={styles['logo-box']} href={props.link}>
      <div>
        <span className={styles['logo__text']}>{text}</span>
        <p className={styles['logo__slogan']}>{slogan}</p>
      </div>
    </a>
  );
};

export default LogoBox;
