import React from 'react';
import styles from './ButtonMobile.module.css';

const ButtonMobile = props => {
  return (
    <button className={styles['btn--mobile']} onClick={props.buttonHandler}>
      <i className={`fa-solid fa-${props.openNav ? 'xmark' : 'bars'}`}></i>
    </button>
  );
};

export default ButtonMobile;
