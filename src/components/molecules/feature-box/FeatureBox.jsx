import React from 'react';
import Button from '../../atoms/button/Button';
import FeatureList from '../feature-list/FeatureList';
import HeadingSmall from '../heading-small/HeadingSmall';
import MarginBox from '../../atoms/margin-box/MarginBox';
import styles from './FeatureBox.module.css';

const Box = props => {
  const listItems = props.list;

  return (
    <MarginBox>
      <HeadingSmall title={props.title} text={props.text} />
      <FeatureList list={listItems} cols={props.cols} />
      <Button text="Prueba ahora" style="primary" align="right" />
    </MarginBox>
  );
};

export default Box;
