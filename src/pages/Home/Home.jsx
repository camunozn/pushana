import React from 'react';
import styles from './Home.module.css';
import Hero from '../../components/Home/Hero';
import Intro from '../../components/Home/Intro';
import Explore from '../../components/Home/Explore';
import Product from '../../components/Home/Product';

const Home = () => {
  return (
    <main className={styles.home}>
      <Hero />
      <Intro />
      <Product />
      <Explore />
    </main>
  );
};

export default Home;
