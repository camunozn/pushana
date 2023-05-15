import React from 'react';
import Button from '../../atoms/button/Button';
import FeatureList from '../feature-list/FeatureList';
import HeadingSmall from '../heading-small/HeadingSmall';
import styles from './FeatureBox.module.css';

const Box = props => {
  const listItems = props.list;

  return (
    <div className={styles.box}>
      <div className={styles['box__margin']}>
        <div className={styles['box__container']}>
          <HeadingSmall title={props.title} text={props.text} />
          <FeatureList list={listItems} cols={props.cols} />
          <Button text="Prueba ahora" style="primary" align="right" />
        </div>
      </div>
    </div>
  );
};

export default Box;
