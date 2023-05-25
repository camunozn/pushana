import React from 'react';
import Card from '../card/Card';
import styles from './CardsBox.module.css';

const CardsBox = props => {
  const cardsList = props.cardsList;
  const boxCols = cardsList.length;

  return (
    <div
      // className={`${styles['cards-box']} ${styles[`grid--${boxCols}-cols`]}`}
      className={styles['cards-box']}
    >
      {cardsList.map(card => (
        <div className={styles['card-item']} key={card.title}>
          <Card
            icon={card.icon}
            title={card.title}
            style={card.style}
            text={card.text}
            type={card.type}
            element={card.element}
          />
        </div>
      ))}
    </div>
  );
};

export default CardsBox;
