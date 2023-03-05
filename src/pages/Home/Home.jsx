import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TypeAnimation } from 'react-type-animation';
import { setIsSticky } from '../../store/slices/isSticky.slice';
import homeImgArr from '../../assets/images/index';
import styles from './Home.module.css';
import Card from '../../components/UI/Card';

const Home = () => {
  const isSticky = useSelector(state => state.isSticky);
  const dispatch = useDispatch();
  const heroRef = useRef();

  const wordSequenceArray = [
    'fácil',
    1000,
    'eficiente',
    1000,
    'clara',
    1000,
    'accesible',
    1000,
    'efectiva',
    1000,
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      dispatch(setIsSticky(!entry.isIntersecting));
    });
    observer.observe(heroRef.current);
  }, []);

  return (
    <div className={styles.home}>
      <div className={`${styles['section-hero']} ${isSticky && styles.sticky}`}>
        <div ref={heroRef} className={styles['hero-main']}>
          <div className={styles['hero-main__heading']}>
            <h1 className={styles['hero-main__heading__text']}>
              Gestión de proyectos de construcción hecha
              <TypeAnimation
                sequence={wordSequenceArray}
                speed={50} // Custom Speed from 1-99 - Default Speed: 40
                wrapper="span" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
              />
            </h1>
          </div>
          <div className={`${styles['hero-main__img']}`}>
            <img src={homeImgArr[0]} alt="Hero image" />
          </div>
        </div>
        <div className={styles['hero-buttons']}>
          <a className="btn btn__primary" href="/">
            Registro anticipado
          </a>
          <a className="btn btn__secondary" href="/">
            Descubre más
          </a>
        </div>
      </div>
      <div className={styles['section-intro']}>
        <h2 className={styles['intro-heading']}>
          Pushana es una empresa emergente que busca cambiar la forma de
          planificar y controlar los proyectos de construcción en el país.
        </h2>
        <p className={styles['intro-text']}>
          Nuestra aplicación está diseñada para facilitar la planificación y el
          control de proyectos de construcción, haciendo estos procesos
          eficientes, claros y accesibles para todos. Especialmente pensada para
          potenciar a pequeños y medianos constructores.
        </p>
        <div className={styles['intro-div']}>
          <span></span>
        </div>
      </div>
      <div className={styles['section-features']}>
        <h3></h3>
        <h2 className={styles['features-heading']}>Explora ahora</h2>
        <p className={styles['features-text']}>
          Conoce nuestra app, apóyate en nuestra comunidad o aprende algo nuevo
          con nuestro blog.
        </p>
        <div className={styles['features-container']}>
          <Card image={homeImgArr[3]} title="Pushana App" accent="primary" />
          <Card image={homeImgArr[4]} title="Comunidad" accent="secondary" />
          <Card image={homeImgArr[5]} title="Blog" accent="primary" />
        </div>
      </div>
    </div>
  );
};

export default Home;
