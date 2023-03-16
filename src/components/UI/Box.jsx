import React from 'react';
import styles from './Box.module.css';

const Box = props => {
  const detailsArray = props.details;

  return (
    <div className={styles.box}>
      <div className={styles['box__margin']}>
        <div className={styles['box__container']}>
          <div className={styles['box__title-box']}>
            <h3 className={styles['box__title-heading']}>{props.heading}</h3>
            <p className={styles['box__title-text']}>{props.text}</p>
          </div>
          <div className={styles['box__grid']}>
            {detailsArray.map(detail => (
              <div key={detail.name} className={styles['box__detail']}>
                <i className={`${detail.icon}`}></i>
                <p>{detail.name}</p>
              </div>
            ))}
          </div>
          <div className={styles['box__button-box']}>
            <a className="btn btn--primary" href="/">
              Prueba ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
