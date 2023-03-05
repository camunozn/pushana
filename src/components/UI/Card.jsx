import React from 'react';
import styles from './Card.module.css';

const Card = props => {
  return (
    <div className={styles.card}>
      <div>
        <div className={styles['card-img']}>
          <img src={props.image} alt="Card image" />
        </div>
        <div className={styles['card-content']}>
          <h3
            className={`${styles['card-title']} ${
              styles[`title-accent__${props.accent}`]
            }`}
          >
            {props.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
