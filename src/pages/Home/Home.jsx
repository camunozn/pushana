import React from 'react';
import styles from './Home.module.css';
import Hero from '../../modules/Home/Hero';
import Introduction from '../../modules/Home/Introduction';
import Explore from '../../modules/Home/Explore';
import Product from '../../modules/Home/Product';
import Header from '../../modules/Header/Header';
import Footer from '../../modules/Footer/Footer';

const Home = () => {
  const linksList = [
    { name: 'Productos', link: '/' },
    { name: 'Comunidad', link: '/' },
    { name: 'Blog', link: '/' },
    { name: 'Nosotros', link: '/' },
  ];

  return (
    <div className={styles.home}>
      <Header linksList={linksList} />
      <main>
        <Hero />
        <Introduction />
        <Product />
        <Explore />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
