import React from 'react';
import styles from './FeatureBox.module.css';
import MarginBox from '../../atoms/margin-box/MarginBox';
import FeatureIntro from '../../atoms/feature-intro/FeatureIntro';
import Button from '../../atoms/button/Button';

const FeatureBox = props => {
  return (
    <div className={styles['features__container']}>
      {props.features &&
        props.features.map(feature => (
          <div key={feature.featureName} className={styles.feature}>
            <MarginBox background={props.background}>
              <FeatureIntro
                title={feature.featureIntro.title}
                text={feature.featureIntro.text}
                image={feature.featureIntro.image}
                accent={feature.featureIntro.accent}
                link={feature.featureLink}
              />
            </MarginBox>
          </div>
        ))}
    </div>
  );
};

export default FeatureBox;
