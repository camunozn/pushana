import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Button.module.css';

const Button = props => {
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

  const clickHandler = props.type === 'page' ? navigateToPage : scrollToSection;

  return (
    <div
      className={`${styles['btn-box']} ${styles[`box-align--${props.align}`]}`}
    >
      <button
        className={`${styles.btn} ${styles[`btn--${props.style}`]}`}
        onClick={() => clickHandler(props.element)}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
