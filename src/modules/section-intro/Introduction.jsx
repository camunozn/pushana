import React, { useRef } from 'react';
import HeadingLarge from '../../components/molecules/heading-large/HeadingLarge';
import CardsBox from '../../components/molecules/cards-box/CardsBox';
import RegistrationForm from '../../components/organisms/registration-form/RegistrationForm';
import styles from './Introduction.module.css';
import MarginBox from '../../components/atoms/margin-box/MarginBox';

const Introduction = props => {
  return (
    <section id={props.id} className={styles['intro']}>
      <div className={styles['intro__container']}>
        <HeadingLarge title={props.heading.title} text={props.heading.text} />
        {props.cardsList && <CardsBox cardsList={props.cardsList} />}
        {props.formData && (
          <MarginBox>
            <RegistrationForm formData={props.formData} />
          </MarginBox>
        )}
      </div>
    </section>
  );
};

export default Introduction;
