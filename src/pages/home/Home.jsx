import React from 'react';
import styles from './Home.module.css';
import Hero from '../../components/organisms/section-hero/Hero';
import Introduction from '../../components/organisms/section-intro/Introduction';
import Explore from '../../components/organisms/section-explore/Explore';
import Product from '../../components/organisms/section-product/Product';
import Header from '../../components/organisms/header/Header';
import Footer from '../../components/organisms/footer/Footer';

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
