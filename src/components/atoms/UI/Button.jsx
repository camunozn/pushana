import React from 'react';
import styles from './Button.module.css';

const Button = props => {
  return (
    <div
      className={`${styles['btn-box']} ${styles[`box-align--${props.align}`]}`}
    >
      <button
        className={`${styles.btn} ${styles[`btn--${props.style}`]}`}
        onClick={() => props.clickHandler(props.element)}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
