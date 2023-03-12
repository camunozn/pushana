import React from 'react';
import styles from './Card.module.css';

const Card = props => {
  return (
    <div className={styles.card}>
      <div>
        {props.image && (
          <div className={styles['card__img']}>
            <img src={props.image} alt="Card image" />
          </div>
        )}
        {props.icon && (
          <div
            className={`${styles['card__icon']} ${
              styles[`icon--${props.style}`]
            }`}
          >
            <i className={props.icon}></i>
          </div>
        )}
        <div className={styles['card__content']}>
          <h3
            className={`${styles['card__title']} ${
              styles[`title--${props.style}`]
            } ${styles[`color--${props.color}`]}`}
          >
            {props.title}
          </h3>
          <p className={styles['card__text']}>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
