import React from 'react';
import styles from './Intro.module.css';

const Intro = props => {
  return (
    <div className={styles['feature-heading']}>
      <div className={styles['feature-heading__container']}>
        <h3 className={styles['feature-heading__title']}>
          {props.title.start}{' '}
          <span className={styles[`accent--${props.accent}`]}>
            {props.title.middle}{' '}
          </span>
          {props.title.end}
        </h3>
        <p className={styles['feature-heading__text']}>{props.text}</p>
        <div className={styles['feature-heading__img-box']}>
          <img src={props.image} alt="Feature image" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
