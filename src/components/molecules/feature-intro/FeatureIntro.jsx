import React from 'react';
import styles from './FeatureIntro.module.css';

const FeatureIntro = props => {
  return (
    <div className={styles['feature']}>
      <div className={styles['feature__container']}>
        <div className={styles['feature__heading']}>
          <img src={props.image} alt="Feature image" />
          <h3 className={styles['feature__title']}>
            {props.title.start}{' '}
            <span className={styles[`accent--${props.accent}`]}>
              {props.title.middle}{' '}
            </span>
            {props.title.end}
          </h3>
        </div>
        <p className={styles['feature__text']}>{props.text}</p>
      </div>
    </div>
  );
};

export default FeatureIntro;
