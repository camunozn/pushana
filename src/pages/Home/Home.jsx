import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import styles from './Home.module.css';
import heroImg from '../../assets/images/hero-img-easy.png';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles['section-hero']}>
        <div className={styles['hero-main']}>
          <div className={styles['hero-main__heading']}>
            <h1 className={styles['hero-main__heading__text']}>
              Gestión de proyectos de construcción hecha
              <TypeAnimation
                sequence={[
                  'fácil',
                  1000,
                  'efectiva',
                  1000,
                  'eficiente',
                  1000,
                  'accesible',
                  1000,
                ]}
                speed={50} // Custom Speed from 1-99 - Default Speed: 40
                wrapper="span" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
              />
            </h1>
          </div>
          <div className={styles['hero-main__img']}>
            <img src={heroImg} alt="Hero image" />
          </div>
        </div>
        <div className={styles['hero-buttons']}>
          <a className="btn btn__primary" href="">
            Descubre más
          </a>
          <a className="btn btn__secondary" href="">
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
