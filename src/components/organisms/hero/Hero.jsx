import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Button from '../../atoms/button/Button';
import styles from './Hero.module.css';

const Hero = props => {
  return (
    <section id="section-hero" className={styles['hero']}>
      <div className={styles['hero__container']}>
        {/* <div className={styles['hero__text-box']}>
          <h1 className={styles['hero__heading']}>
            {props.heading.start}
            <span className={styles['hero__heading__animation']}>
              <TypeAnimation
                sequence={props.sequenceWords}
                speed={40} // Custom Speed from 1-99 - Default Speed: 40
                wrapper="span" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
              />
            </span>
            {props.heading.middle}
            {props.heading.end}
          </h1>
          <p className={styles['hero__text']}>{props.heading.text}</p>
        </div>
        <div className={styles['hero__img-box']}>
          <img src={props.heading.image} alt="Hero image" />
        </div> */}
        {/* <div className={styles['hero__btn-box']}>
          <Button
            text={props.primaryBtnOptions.text}
            style={props.primaryBtnOptions.style}
            align={props.primaryBtnOptions.align}
            type={props.primaryBtnOptions.type}
            element={props.primaryBtnOptions.element}
          />
          <Button
            text={props.secondaryBtnOptions.text}
            style={props.secondaryBtnOptions.style}
            align={props.secondaryBtnOptions.align}
            type={props.secondaryBtnOptions.type}
            element={props.secondaryBtnOptions.element}
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
