import React from 'react';
import Introduction from '../../modules/section-intro/Introduction';

const Community = () => {
  const headingIntroCommunity = {
    title: 'Una comunidad sobre gestión de proyectos en la que puedes confiar.',
    text: 'En nuestra comunidad podrás encontrar consejos prácticos y recursos para ayudarte con la gestión de tus proyectos.',
  };

  const cardsListIntroCommunity = [
    {
      icon: 'fa-solid fa-comments',
      title: 'Consejos prácticos',
      style: 'primary',
    },
    {
      icon: 'fa-solid fa-clipboard-question',
      title: 'Preguntas frecuentes',
      style: 'primary',
    },
    {
      icon: 'fa-solid fa-file-circle-check',
      title: 'Recursos y plantillas',
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
