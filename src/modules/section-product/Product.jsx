import React from 'react';
import FeatureBox from '../../components/molecules/feature-box/FeatureBox';
import FeatureIntro from '../../components/molecules/feature-intro/FeatureIntro';
import HeadingMedium from '../../components/molecules/heading-medium/HeadingMedium';
import MarginBox from '../../components/atoms/margin-box/MarginBox';
import Button from '../../components/atoms/button/Button';
import styles from './Product.module.css';

const Product = props => {
  return (
    <section id={props.id} className={styles.product}>
      <div className={styles['product__container']}>
        <HeadingMedium title={props.heading.title} text={props.heading.text} />
        {props.features.map(feature => (
          <div key={feature.featureName}>
            <FeatureIntro
              title={feature.featureIntro.title}
              text={feature.featureIntro.text}
              image={feature.featureIntro.image}
              accent={feature.featureIntro.accent}
            />
            <MarginBox>
              <FeatureBox
                title={feature.featureBox.boxHeading.title}
                text={feature.featureBox.boxHeading.text}
                list={feature.featureBox.boxList}
                cols={feature.featureBox.listCols}
              />
              <Button
                text="Contáctenos"
                style="primary"
                align="right"
                type="page"
                element={feature.featureLink}
              />
            </MarginBox>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
