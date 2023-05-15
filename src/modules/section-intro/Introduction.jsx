import React, { useRef } from 'react';
import HeadingLarge from '../../components/molecules/heading-large/HeadingLarge';
import CardsBox from '../../components/molecules/cards-box/CardsBox';
import styles from './Introduction.module.css';

const Introduction = props => {
  return (
    <section id={props.id} className={styles['intro']}>
      <div className={styles['intro__container']}>
        <HeadingLarge title={props.heading.title} text={props.heading.text} />
        <CardsBox cardsList={props.cardsList} />
      </div>
    </section>
  );
};

export default Introduction;
