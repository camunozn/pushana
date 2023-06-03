import React from 'react';
import styles from './MarginBox.module.css';

const MarginBox = props => {
  return (
    <div className={styles.box}>
      <div className={styles['box__margin']}>
        <div
          className={`${styles['box__container']} ${`bg--${props.background}`}`}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default MarginBox;
