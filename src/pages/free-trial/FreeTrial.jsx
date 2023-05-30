import React from 'react';
import Introduction from '../../modules/section-intro/Introduction';

const FreeTrial = () => {
  const headingIntroTrial = {
    title:
      'Próximamente: prueba nuestra app y descubre una nueva forma de gestionar tus proyectos.',
    text: 'Déjanos tus datos y te notificaremos cuando puedas probar esta nueva experiencia en gestión de proyectos de construcción.',
  };

  return (
    <div className="free-trial">
      <Introduction heading={headingIntroTrial} />
    </div>
  );
};

export default FreeTrial;
