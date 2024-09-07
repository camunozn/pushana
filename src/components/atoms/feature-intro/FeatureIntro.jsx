import React from 'react';
import styles from './FeatureIntro.module.css';
import Button from '../../atoms/button/Button';

const FeatureIntro = props => {
  return (
    <div className={styles['feature']}>
      <div className={styles['feature__container']}>
        <img src={props.image} alt="Feature image" />
        <div className={styles['feature__heading']}>
          <h3 className={styles['feature__title']}>
            {props.title.start}{' '}
            <span className={styles[`accent--${props.accent}`]}>
              {props.title.middle}{' '}
            </span>
            {props.title.end}
          </h3>
          <p className={styles['feature__text']}>{props.text}</p>
          <div className={styles['feature__button']}>
            <Button
              text="Conocer más"
              style="primary"
              align="center"
              type="page"
              element={props.link}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureIntro;
