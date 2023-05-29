import React from 'react';
import Introduction from '../../modules/section-intro/Introduction';

const About = () => {
  const headingIntroAbout = {
    title:
      'Pushana Construction Project Management: nuestro origen, filosofía y visión.',
    text: 'En quichua, pushana significa guiar, dirigir. Para nosotros es una palabra que representa de donde venimos y, a la vez, hacia donde vamos: buscamos guiar a las empresas constructoras hacia una gestión de proyectos exitosa.',
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
      icon: 'fa-solid fa-rainbow',
      title: 'Visión',
      style: 'primary',
    },
  ];

  return (
    <div className="about">
      <Introduction
        heading={headingIntroAbout}
        cardsList={cardsListIntroAbout}
      />
    </div>
  );
};

export default About;
