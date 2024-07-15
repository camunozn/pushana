import React from 'react';
import Introduction from '../../modules/section-intro/Introduction';

const Community = () => {
  const headingIntroCommunity = {
    title: 'Recursos para la gestión de proyectos de construcción.',
    text: 'Te compartimos ideas, consejos, herramientas y plantillas para ayudarte con la gestión de tus proyectos de ingeniería y construcción.',
  };

  const cardsListIntroCommunity = [
    {
      icon: 'fa-solid fa-comments',
      title: 'Ideas y consejos',
      style: 'primary',
    },
    {
      icon: 'fa-solid fa-file-circle-check',
      title: 'Herramientas y plantillas',
      style: 'primary',
    },
  ];

  return (
    <div className="community">
      <Introduction
        heading={headingIntroCommunity}
        cardsList={cardsListIntroCommunity}
        background="normal"
      />
    </div>
  );
};

export default Community;
