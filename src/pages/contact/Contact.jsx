import React from 'react';
import Intro from '../../components/organisms/intro/Intro';

const Contact = () => {
  const sectionBg = 'normal';

  const headingIntroContact = {
    title:
      'Contáctenos: estaremos gustosos de atender sus consultas.',
    text: 'No importa el medio: llámanos, envíanos un correo electrónico o escríbenos por Whatsapp; estamos atentos a tus requerimientos.',
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
      <Intro
        heading={headingIntroContact}
        cardsList={cardsListIntroContact}
        background={sectionBg}
      />
    </div>
  );
};

export default Contact;
