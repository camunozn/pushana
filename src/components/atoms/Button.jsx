import React from 'react';
import styles from './Button.module.css';

const Button = props => {
  return (
    <div
      className={`${styles['btn-box']} ${styles[`box-align--${props.align}`]}`}
    >
      <a className={`${styles.btn} ${styles[`btn--${props.style}`]}`} href="">
        {props.text}
      </a>
    </div>
  );
};

export default Button;
