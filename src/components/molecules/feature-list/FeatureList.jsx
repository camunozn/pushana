import React from 'react';
import styles from './FeatureList.module.css';

const FeatureList = props => {
  const listItems = props.list;

  return (
    <ul
      className={`${styles['list__grid']} ${
        styles[`grid--${props.cols}-cols`]
      }`}
    >
      {listItems.map(item => (
        <li key={item.name} className={styles['list__item']}>
          <i className={`${item.icon}`}></i>
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
