import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TypeAnimation } from 'react-type-animation';
import { Link, animateScroll as scroll } from 'react-scroll';
import { setIsSticky } from '../../store/slices/isSticky.slice';
import imagesArray from '../../assets/index';
import styles from './Hero.module.css';

const Hero = () => {
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
    <section
      id="section-hero"
      className={`${styles['hero']} ${isSticky && styles.sticky}`}
    >
      <div ref={heroRef} className={styles['hero__container']}>
        <div className={styles['hero__text-box']}>
          <h1 className={styles['hero__heading']}>
            Gestión de proyectos de construcción hecha
            <TypeAnimation
              sequence={wordSequenceArray}
              speed={50} // Custom Speed from 1-99 - Default Speed: 40
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
          </h1>
        </div>
        <div className={`${styles['hero__img-box']}`}>
          <img src={imagesArray.imgConstruction} alt="Hero image" />
        </div>
        <div className={styles['hero__btn-box']}>
          <a className="btn btn--primary" href="/">
            Regístrate ahora
          </a>
          <Link
            to="section-intro"
            smooth={true}
            offset={-70}
            duration={500}
            className="btn btn--link btn--secondary"
          >
            Descubre más
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
