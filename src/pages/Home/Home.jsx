import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import styles from './Home.module.css';
import heroImg from '../../assets/images/hero-img-easy.png';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles['section-hero']}>
        <div className={styles['hero-heading']}>
          <h1 className={styles['hero-heading__text']}>
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
          <div className={styles['hero-heading__buttons']}>
            <a className="btn btn__primary" href="">
              Únete a la comunidad
            </a>
            <a className="btn btn__secondary" href="">
              Contáctanos
            </a>
          </div>
        </div>
        <div className={styles['hero-img']}>
          <img src={heroImg} alt="Hero image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
