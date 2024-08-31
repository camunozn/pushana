import React from 'react';
import Card from '../../atoms/card/Card';
import styles from './CardsBox.module.css';

const CardsBox = props => {
  return (
    <div className={styles['cards-box']}>
      {props.cardsList.map(card => (
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
