import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TypeAnimation } from 'react-type-animation';
import { setIsSticky } from '../../../store/slices/isSticky.slice';
import imagesArray from '../../../assets/index';
import Button from '../../atoms/Button';
import styles from './Hero.module.css';

const Hero = () => {
  const isSticky = useSelector(state => state.isSticky);
  const dispatch = useDispatch();

  const heroRef = useRef();

  const sequenceWords = [
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
    <section
      id="section-hero"
      className={`${styles['hero']} ${isSticky && styles.sticky}`}
    >
      <div ref={heroRef} className={styles['hero__container']}>
        <div className={styles['hero__text-box']}>
          <h1 className={styles['hero__heading']}>
            Gestión de proyectos
            <br />
            de construcción
            <br />
            hecha
            <TypeAnimation
              sequence={sequenceWords}
              speed={50} // Custom Speed from 1-99 - Default Speed: 40
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
          </h1>
          <p className={styles['hero__text']}>
            Simplifica la planificación y el control, evita reprocesos, haz que
            la información fluya y mejora el desempeño de tus proyectos.
          </p>
        </div>
        <div className={`${styles['hero__img-box']}`}>
          <img src={imagesArray.imgHero} alt="Hero image" />
        </div>
        <div className={styles['hero__btn-box']}>
          <Button text="Prueba ahora" style="primary" align="center" />
          <Button text="Descubre más" style="secondary" align="center" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
