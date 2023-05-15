import React from 'react';
import Box from '../../components/molecules/box/Box';
import Intro from '../../components/molecules/intro-box/Intro';
import HeadingMedium from '../../components/molecules/heading-medium/HeadingMedium';
import imagesArray from '../../assets/index';
import styles from './Product.module.css';

const Product = props => {
  return (
    <section id={props.id} className={styles.product}>
      <div className={styles['product__container']}>
        <HeadingMedium title={props.heading.title} text={props.heading.text} />
        <Intro
          title={props.firstFeatureIntro.title}
          text={props.firstFeatureIntro.text}
          image={props.firstFeatureIntro.image}
          accent={props.firstFeatureIntro.accent}
        />
        <Box
          title={props.firstBoxHeading.title}
          text={props.firstBoxHeading.text}
          list={props.firstFeatures}
          cols={props.cols}
        />
        <Intro
          title={props.secondFeatureIntro.title}
          text={props.secondFeatureIntro.text}
          image={props.secondFeatureIntro.image}
          accent={props.secondFeatureIntro.accent}
        />
        <Box
          title={props.secondBoxHeading.title}
          text={props.secondBoxHeading.text}
          list={props.secondFeatures}
          cols={props.cols}
        />
        <Intro
          title={props.thirdFeatureIntro.title}
          text={props.thirdFeatureIntro.text}
          image={props.thirdFeatureIntro.image}
          accent={props.thirdFeatureIntro.accent}
        />
        <Box
          title={props.thirdBoxHeading.title}
          text={props.thirdBoxHeading.text}
          list={props.thirdFeatures}
          cols={props.cols}
        />
      </div>
    </section>
  );
};

export default Product;
