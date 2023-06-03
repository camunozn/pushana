import React from 'react';
import styles from './InputGroup.module.css';

const InputGroup = props => {
  return (
    <div
      className={`${styles['input-group']} ${
        props.line === 'fill' ? styles['input-group--fill'] : ''
      }`}
    >
      <label className={styles['input-label']} htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className={styles['input-control']}
        type={props.type}
        id={props.id}
        {...props.register(props.name)}
      />
    </div>
  );
};

export default InputGroup;
