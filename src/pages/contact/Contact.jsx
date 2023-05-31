import React from 'react';
import Introduction from '../../modules/section-intro/Introduction';

const Contact = () => {
  const headingIntroContact = {
    title:
      'Contáctanos: no importa el medio, estamos disponibles para atender tus consultas.',
    text: 'Llámanos, envíanos un correo electrónico o escríbenos por Whatsapp.',
  };

  const cardsListIntroContact = [
    {
      icon: 'fa-solid fa-phone-volume',
      title: 'Llamada',
      style: 'primary',
      type: 'link',
      element: 'tel:+593998043941',
    },
    {
      icon: 'fa-regular fa-envelope',
      title: 'Correo electrónico',
      style: 'primary',
      type: 'link',
      element: 'mailto:camunozn@pushana.com',
    },
    {
      icon: 'fa-brands fa-whatsapp',
      title: 'Whatsapp',
      style: 'primary',
      type: 'link',
      element:
        'https://api.whatsapp.com/send?phone=593998043941&text=Hola,+quisiera+más+información+sobre+sus+servicios',
    },
  ];

  return (
    <div className="contact">
      <Introduction
        heading={headingIntroContact}
        cardsList={cardsListIntroContact}
      />
    </div>
  );
};

export default Contact;
