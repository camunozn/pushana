import React from 'react';
import HeadingSmall from '../../molecules/heading-small/HeadingSmall';
import MarginBox from '../../atoms/margin-box/MarginBox';
import styles from './RegistrationForm.module.css';

const RegistrationForm = props => {
  return (
    <div className="registration-form">
      <MarginBox>
        <HeadingSmall
          title={props.formData.heading.title}
          text={props.formData.heading.text}
        />
      </MarginBox>
    </div>
  );
};

export default RegistrationForm;
