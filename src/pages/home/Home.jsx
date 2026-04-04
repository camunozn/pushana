import React from 'react';
import styles from './Home.module.css';
import Hero from '../../components/organisms/hero/Hero';
import FeatureBox from '../../components/molecules/feature-box/FeatureBox';
import HeadingMedium from '../../components/atoms/heading-medium/HeadingMedium';
import imagesArray from '../../assets';

const Home = () => {
  //HERO CONTENT

  return (
    <div className={styles.home}>
      <Hero />
    </div>
  );
};

export default Home;
