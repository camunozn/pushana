import React from 'react';
import CardsBox from '../../molecules/UI/CardsBox';
import HeadingMedium from '../../molecules/UI/HeadingMedium';
import styles from './Explore.module.css';

const Explore = () => {
  const heading = {
    title: 'Explora más: consultorías, capacitaciones, comunidad y blog',
    text: 'Conoce nuestros servicios complementarios, apóyate en nuestra comunidad o descubre nuestro blog.',
  };

  const cardsList = [
    {
      icon: 'fa-regular fa-compass',
      title: 'Consulting & Training',
      style: 'primary',
    },
    {
      icon: 'fa-solid fa-people-group',
      title: 'Comunidad Pushana',
      style: 'primary',
    },
    {
      icon: 'fa-solid fa-blog',
      title: 'Pushana Blog',
      style: 'primary',
    },
  ];

  return (
    <section id="section-explore" className={styles.explore}>
      <div className={styles['explore__container']}>
        <HeadingMedium title={heading.title} text={heading.text} />
        <CardsBox cardsList={cardsList} />
      </div>
    </section>
  );
};

export default Explore;
