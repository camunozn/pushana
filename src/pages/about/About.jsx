import React from 'react';
import Introduction from '../../modules/section-intro/Introduction';

const About = () => {
  const headingIntroAbout = {
    title: 'Pushana: nuestro origen y filosofía.',
    text: 'En quichua, Pushana significa guiar, dirigir. Para nosotros es una palabra que representa nuestras raíces y, al mismo tiempo, nuestro objetivo fundamental: guiar a las empresas constructoras del Ecuador y América Latina hacia una gestión de proyectos exitosa.',
  };

  const cardsListIntroAbout = [
    {
      icon: 'fa-solid fa-fingerprint',
      title: 'Origen',
      style: 'primary',
      // text: 'Hemos visto a un contratista perderlo todo por una mala gestión, hemos sido testigos de la quiebra de una empresa por no creer en los procesos de la gestión de proyectos, hemos conocido otra que luchaba con la implementación de los procesos, hemos observado otras tantas que desperdician muchos recursos por procesos ineficientes. Todas estas experiencias nos han motivado a buscar la forma de ayudar a las empresas constructoras a optimizar sus procesos, a capacitar a su gente, y en general, a mejorar la gestión de sus proyectos. Queremos contratistas prósperos, empresas rentables, y una industria de la construcción que crezca y se desarrolle cada día. Este, es nuestro origen.'
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
