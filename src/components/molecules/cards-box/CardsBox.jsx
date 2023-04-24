import React from 'react';
import Card from '../card/Card';
import styles from './CardsBox.module.css';

const CardsBox = props => {
  const cardsList = props.cardsList;
  const boxCols = cardsList.length;

  return (
    <div
      className={`${styles['cards-box']} ${styles[`grid--${boxCols}-cols`]}`}
    >
      {cardsList.map(card => (
        <Card
          key={card.title}
          icon={card.icon}
          title={card.title}
          style={card.style}
          text={card.text}
        />
      ))}
    </div>
  );
};

export default CardsBox;
