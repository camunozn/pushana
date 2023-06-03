import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Form.module.css';
import InputGroup from '../../atoms/input-group/InputGroup';
import Button from '../../atoms/button/Button';

const Form = props => {
  const { register, handleSubmit, reset } = useForm();

  const submit = data => {
    console.log(data);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <div className={styles['form__inputs']}>
        {props.formInputs.map(formInput => (
          <InputGroup
            key={formInput.id}
            id={formInput.id}
            type={formInput.type}
            name={formInput.name}
            label={formInput.label}
            line={formInput.line}
            register={register}
          />
        ))}
      </div>
      <div className={styles['form__button']}>
        <Button
          text={props.formButton.text}
          style={props.formButton.style}
          align={props.formButton.align}
        />
      </div>
    </form>
  );
};

export default Form;
