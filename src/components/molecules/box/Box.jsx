import React from 'react';
import Button from '../../atoms/button/Button';
import List from '../item-list/List';
import HeadingSmall from '../heading-small/HeadingSmall';
import styles from './Box.module.css';

const Box = props => {
  const listItems = props.list;

  return (
    <div className={styles.box}>
      <div className={styles['box__margin']}>
        <div className={styles['box__container']}>
          <HeadingSmall title={props.title} text={props.text} />
          <List list={listItems} cols={props.cols} />
          <Button text="Prueba ahora" style="primary" align="right" />
        </div>
      </div>
    </div>
  );
};

export default Box;
