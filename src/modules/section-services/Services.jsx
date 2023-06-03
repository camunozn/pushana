import React from 'react';
import styles from './Services.module.css';
import MarginBox from '../../components/atoms/margin-box/MarginBox';
import FeatureIntro from '../../components/molecules/feature-intro/FeatureIntro';
import HeadingLarge from '../../components/molecules/heading-large/HeadingLarge';
import Button from '../../components/atoms/button/Button';

const Services = props => {
  return (
    <section
      id={props.id}
      className={`${styles.services} ${`bg--${props.background}`}`}
    >
      <div className={styles['services__container']}>
        <HeadingLarge title={props.heading.title} text={props.heading.text} />
        {props.features.map(feature => (
          <MarginBox key={feature.featureName} background={props.background}>
            <FeatureIntro
              title={feature.featureIntro.title}
              text={feature.featureIntro.text}
              image={feature.featureIntro.image}
              accent={feature.featureIntro.accent}
            />
            <Button
              text="Conocer más"
              style="primary"
              align={
                feature.featureIntro.accent === 'primary' ? 'left' : 'right'
              }
              type="page"
              element={feature.featureLink}
            />
          </MarginBox>
        ))}
      </div>
    </section>
  );
};

export default Services;
