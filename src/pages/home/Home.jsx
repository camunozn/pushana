import React from 'react';
import styles from './Home.module.css';
import Hero from '../../components/organisms/hero/Hero';
import Services from '../../components/organisms/sections/Services';
import Problem from '../../components/organisms/sections/Problem';
import Solution from '../../components/organisms/sections/Solution';
import Allies from '../../components/organisms/sections/Allies';
import Impact from '../../components/organisms/sections/Impact';
import Evidence from '../../components/organisms/sections/Evidence';
import About from '../../components/organisms/sections/About';
import Cta from '../../components/organisms/cta/Cta';

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <Allies />
      <Impact />
      <Evidence />
      <About />
      <Cta />
    </div>
  );
};

export default Home;
