import React from 'react';
import styles from './Home.module.css';
import Hero from '../../components/organisms/Home/Hero';
import Introduction from '../../components/organisms/Home/Introduction';
import Explore from '../../components/organisms/Home/Explore';
import Product from '../../components/organisms/Home/Product';
import Header from '../../components/organisms/Header/Header';
import Footer from '../../components/organisms/Footer/Footer';

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
