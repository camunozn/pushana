import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Form.module.css';
import InputGroup from '../../atoms/input-group/InputGroup';
import Button from '../../atoms/button/Button';

const Form = props => {
  const { register, handleSubmit } = useForm();

  const submit = data => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      {props.formInputs.map(formInput => (
        <InputGroup
          key={formInput.id}
          id={formInput.id}
          type={formInput.type}
          name={formInput.name}
          label={formInput.label}
          register={register}
        />
      ))}
      <Button text="Enviar" style="primary" align="center" />
    </form>
  );
};

export default Form;
