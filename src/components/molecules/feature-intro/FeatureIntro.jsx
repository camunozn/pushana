import React from 'react';
import styles from './FeatureIntro.module.css';

const FeatureIntro = props => {
  return (
    <div className={styles['feature-heading']}>
      <div className={styles[`feature-heading__container--${props.accent}`]}>
        <h3 className={styles['feature-heading__title']}>
          {props.title.start}{' '}
          <span className={styles[`accent--${props.accent}`]}>
            {props.title.middle}{' '}
          </span>
          {props.title.end}
        </h3>
        <p className={styles['feature-heading__text']}>{props.text}</p>
        {/* <div className={styles[`feature-heading__img-box--${props.accent}`]}>
          <img src={props.image} alt="Feature image" />
        </div> */}
      </div>
    </div>
  );
};

export default FeatureIntro;
