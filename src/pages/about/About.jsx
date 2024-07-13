import React from 'react';
import Introduction from '../../modules/section-intro/Introduction';

const About = () => {
  const headingIntroAbout = {
    title:
      'Pushana: nuestro origen, filosofía y visión.',
    text: 'En quichua, Pushana significa guiar, dirigir. Para nosotros es una palabra que representa nuestras raíces y, al mismo tiempo, nuestro objetivo fundental: guiar a las empresas constructoras del Ecuador y América Latina hacia una gestión de proyectos exitosa.',
  };

  const cardsListIntroAbout = [
    {
      icon: 'fa-solid fa-fingerprint',
      title: 'Origen',
      style: 'primary',
    },
    {
      icon: 'fa-solid fa-book-journal-whills',
      title: 'Filosofía',
      style: 'primary',
    },
    {
      icon: 'fa-solid fa-clipboard-question',
      title: 'FAQ',
      style: 'primary',
    },
  ];

  return (
    <div className="about">
      <Introduction
        heading={headingIntroAbout}
        cardsList={cardsListIntroAbout}
        background="normal"
      />
    </div>
  );
};

export default About;
