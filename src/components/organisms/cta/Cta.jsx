import React from 'react';
import HeadingSmall from '../../molecules/heading-small/HeadingSmall';
import MarginBox from '../../atoms/margin-box/MarginBox';
import styles from './Cta.module.css';
import Form from '../../molecules/form/Form';

const Cta = props => {
  const heading = props.ctaData.heading;
  const formData = props.ctaData.form;

  return (
    <div className="registration-form">
      <MarginBox>
        <HeadingSmall title={heading.title} text={heading.text} />
        <Form
          formInputs={formData.formInputs}
          formButton={formData.formButton}
        />
      </MarginBox>
    </div>
  );
};

export default Cta;
