import React from 'react';
import Introduction from '../../modules/section-intro/Introduction';

const FreeTrial = () => {
  const headingIntroTrial = {
    title:
      'Próximamente: prueba nuestra app y descubre una nueva forma de gestionar tus proyectos.',
    text: 'Déjanos tus datos y te notificaremos cuando puedas probar esta nueva experiencia en gestión de proyectos de construcción.',
  };

  const ctaData = {
    heading: {
      title: 'Formulario de registro.',
      text: 'Regístrate para ser el primero en conocer cuando nuestra App esté disponible.',
    },
    form: {
      formInputs: [
        {
          id: 'firstname',
          type: 'text',
          name: 'firstname',
          label: 'Nombre: ',
          line: 'share',
        },
        {
          id: 'lastname',
          type: 'text',
          name: 'lastname',
          label: 'Apellido: ',
          line: 'share',
        },
        {
          id: 'email',
          type: 'email',
          name: 'email',
          label: 'Correo: ',
          line: 'fill',
        },
        {
          id: 'comment',
          type: 'text',
          name: 'comment',
          label: 'Comentario: ',
          line: 'fill',
        },
      ],
      formButton: {
        text: 'Enviar',
        style: 'primary',
        align: 'right',
      },
    },
  };

  return (
    <div className="free-trial">
      <Introduction heading={headingIntroTrial} ctaData={ctaData} />
    </div>
  );
};

export default FreeTrial;
