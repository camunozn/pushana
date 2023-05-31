import React from 'react';
import Introduction from '../../modules/section-intro/Introduction';
import RegistrationForm from '../../components/organisms/registration-form/RegistrationForm';

const FreeTrial = () => {
  const headingIntroTrial = {
    title:
      'Próximamente: prueba nuestra app y descubre una nueva forma de gestionar tus proyectos.',
    text: 'Déjanos tus datos y te notificaremos cuando puedas probar esta nueva experiencia en gestión de proyectos de construcción.',
  };

  const registrationFormData = {
    heading: {
      title: 'Formulario de registro.',
      text: 'Regístrate para ser el primero en conocer cuando nuestra App esté disponible.',
    },
  };

  return (
    <div className="free-trial">
      <Introduction
        heading={headingIntroTrial}
        formData={registrationFormData}
      />
    </div>
  );
};

export default FreeTrial;
