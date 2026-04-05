import React from 'react';
import styles from './Home.module.css';
import Hero from '../../components/organisms/hero/Hero';

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
    </div>
  );
};

export default Home;
