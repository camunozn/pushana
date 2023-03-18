import React from 'react';
import styles from './HeadingSmall.module.css';

const HeadingSmall = props => {
  return (
    <div className={styles['heading-box']}>
      <h2 className={styles['heading__title']}>{props.title}</h2>
      <p className={styles['heading__text']}>{props.text}</p>
    </div>
  );
};

export default HeadingSmall;
