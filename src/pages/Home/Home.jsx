import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TypeAnimation } from 'react-type-animation';
import { setIsSticky } from '../../store/slices/isSticky.slice';
import heroImgArr from '../../assets/images/index';
import styles from './Home.module.css';

const Home = () => {
  const [heroImg, setHeroImg] = useState(heroImgArr[0]);
  const isSticky = useSelector(state => state.isSticky);

  const heroRef = useRef();
  const dispatch = useDispatch();

  const generateRandom = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      dispatch(setIsSticky(!entry.isIntersecting));
    });
    observer.observe(heroRef.current);
  }, []);

  useEffect(() => {
    const maxIndex = heroImgArr.length - 1;
    const minIndex = 0;
    setHeroImg(heroImgArr[generateRandom(minIndex, maxIndex)]);
  }, []);

  return (
    <div className={styles.home}>
      <div className={`${styles['section-hero']} ${isSticky && styles.sticky}`}>
        <div ref={heroRef} className={styles['hero-main']}>
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
                  'clara',
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
          <div className={`${styles['hero-main__img']}`}>
            <img src={heroImg} alt="Hero image" />
          </div>
        </div>
        <div className={styles['hero-buttons']}>
          <a className="btn btn__primary" href="">
            Registro anticipado
          </a>
          <a className="btn btn__secondary" href="">
            Descubre más
          </a>
        </div>
      </div>
      <div className={styles['section-details']}>
        <h1>SECTION</h1>
      </div>
    </div>
  );
};

export default Home;
