import React from 'react';
import styles from './RegistrationForm.module.css';
import HeadingSmall from '../../molecules/heading-small/HeadingSmall';

const RegistrationForm = props => {
  return (
    <div className="registration-form">
      <HeadingSmall
        title={props.formData.heading.title}
        text={props.formData.heading.text}
      />
    </div>
  );
};

export default RegistrationForm;
