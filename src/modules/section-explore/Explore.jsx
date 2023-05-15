import React from 'react';
import CardsBox from '../../components/molecules/cards-box/CardsBox';
import HeadingMedium from '../../components/molecules/heading-medium/HeadingMedium';
import styles from './Explore.module.css';

const Explore = props => {
  return (
    <section id="section-explore" className={styles.explore}>
      <div className={styles['explore__container']}>
        <HeadingMedium title={props.heading.title} text={props.heading.text} />
        <CardsBox cardsList={props.cardsList} />
      </div>
    </section>
  );
};

export default Explore;
