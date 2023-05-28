import React from 'react';
import FeatureList from '../feature-list/FeatureList';
import HeadingSmall from '../heading-small/HeadingSmall';
import styles from './FeatureBox.module.css';

const FeatureBox = props => {
  const listItems = props.list;

  return (
    <div className="feature-box">
      <HeadingSmall title={props.title} text={props.text} />
      <FeatureList list={listItems} cols={props.cols} />
    </div>
  );
};

export default FeatureBox;
