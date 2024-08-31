import React, { useRef } from 'react';
import HeadingLarge from '../../atoms/heading-large/HeadingLarge';
import CardsBox from '../../molecules/cards-box/CardsBox';
import Cta from '../cta/Cta';
import styles from './Intro.module.css';

const Intro = props => {
  return (
    <section
      id={props.id}
      className={`${styles.intro} ${`bg--${props.background}`}`}
    >
      <div className={styles['intro__container']}>
        <HeadingLarge title={props.heading.title} text={props.heading.text} />
        {props.cardsList && <CardsBox cardsList={props.cardsList} />}
        {props.ctaData && (
          <Cta ctaData={props.ctaData} background={props.background} />
        )}
      </div>
    </section>
  );
};

export default Intro;
