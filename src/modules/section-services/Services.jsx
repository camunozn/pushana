import React from 'react';
import styles from './Services.module.css';
import MarginBox from '../../components/atoms/margin-box/MarginBox';
import FeatureIntro from '../../components/molecules/feature-intro/FeatureIntro';
import HeadingMedium from '../../components/molecules/heading-medium/HeadingMedium';
import Button from '../../components/atoms/button/Button';

const Services = props => {
  return (
    <section
      id={props.id}
      className={`${styles.services} ${`bg--${props.background}`}`}
    >
      <div className={styles['services__container']}>
        <HeadingMedium title={props.heading.title} text={props.heading.text} />
        <div className={styles['services__items__container']}>
          {props.features.map(feature => (
            <div key={feature.featureName} className={styles['services__item']}>
              <MarginBox background={props.background}>
                <FeatureIntro
                  title={feature.featureIntro.title}
                  text={feature.featureIntro.text}
                  image={feature.featureIntro.image}
                  accent={feature.featureIntro.accent}
                />
                <Button
                  text="Conocer más"
                  style="primary"
                  align="center"
                  type="page"
                  element={feature.featureLink}
                />
              </MarginBox>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
