import React from 'react';
import styles from './Card.module.css';
import { useNavigate } from 'react-router-dom';

const Card = props => {
  const navigate = useNavigate();

  const scrollToSection = section => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToPage = page => {
    navigate(page);
  };

  const openLink = link => {
    window.open(link, '_blank', 'nonreferrer');
  };

  const clickHandler = (type, element) => {
    if (type === 'section') return scrollToSection(element);
    if (type === 'page') return navigateToPage(element);
    if (type === 'link') return openLink(element);
  };

  return (
    <div
      className={styles.card}
      onClick={() => clickHandler(props.type, props.element)}
    >
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
