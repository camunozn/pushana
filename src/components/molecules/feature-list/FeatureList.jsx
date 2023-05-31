import React from 'react';
import styles from './FeatureList.module.css';

const FeatureList = props => {
  return (
    <ul
      className={`${styles['list__grid']} ${
        styles[`grid--${props.cols}-cols`]
      }`}
    >
      {props.list.map(item => (
        <li key={item.name} className={styles['list__item']}>
          <i className={`${item.icon}`}></i>
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
