import React from 'react';
import styles from './Home.module.css';
import Hero from '../../components/Home/Hero';
import Intro from '../../components/Home/Intro';
import Explore from '../../components/Home/Explore';

const Home = () => {
  return (
    <main className={styles.home}>
      <Hero />
      <Intro />
      <Explore />
    </main>
  );
};

export default Home;
