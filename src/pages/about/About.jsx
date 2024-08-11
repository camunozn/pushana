import React from 'react';
import styles from './About.module.css';
import Introduction from '../../modules/section-intro/Introduction';
import Services from '../../modules/section-services/Services';
import imagesArray from '../../assets';

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
      type: 'section',
      element: 'about-origin',
    },
    {
      icon: 'fa-solid fa-book-journal-whills',
      title: 'Filosofía',
      style: 'primary',
      type: 'section',
      element: 'about-philosophy',
    },
    {
      icon: 'fa-solid fa-heart',
      title: 'Valores',
      style: 'primary',
      type: 'section',
      element: 'about-values',
    },
  ];

  const headingOrigin = {
    title: 'Nuestro origen.',
    text: 'Pushana nace de la observación y la experiencia directa en el sector de la construcción. Hemos visto a contratistas perderlo todo por una mala gestión y a empresas quebrar por no confiar en los procesos de gestión de proyectos. Estas vivencias nos impulsaron a buscar soluciones para ayudar a las empresas constructoras a optimizar sus procesos y capacitar a su personal. En quichua, Pushana significa guiar, dirigir, y esta palabra refleja tanto nuestras raíces como nuestro objetivo fundamental: guiar a las empresas constructoras del Ecuador y América Latina hacia una gestión de proyectos exitosa.',
    image: imagesArray.imgOrigin,
  };

  const headingPhilosophy = {
    title: 'Nuestra filosofía.',
    text: 'La filosofía de Pushana se basa en la profunda comprensión de los desafíos que enfrentan las empresas constructoras. Nos dedicamos a la optimización de procesos, la capacitación del personal y la mejora continua de la gestión de proyectos. Nuestro objetivo es ver contratistas prósperos, empresas rentables y una industria de la construcción en constante crecimiento y desarrollo. Creemos firmemente que, a través de una gestión eficiente y procesos bien implementados, podemos transformar la industria y contribuir a su éxito sostenible.',
    image: imagesArray.imgPhilosophy,
  };

  const headingValues = {
    title: 'Nuestros valores.',
    text: 'Nuestros valores fundamentales guían cada aspecto de nuestra labor. La integridad es la base de nuestras acciones, asegurando honestidad y transparencia en todas nuestras interacciones. Nos comprometemos plenamente con la optimización de procesos y la capacitación del personal, dedicándonos a garantizar el éxito de cada proyecto. Fomentamos la innovación, buscando constantemente nuevas y mejores formas de gestionar proyectos y resolver problemas. La excelencia es nuestro estándar, manteniendo altos niveles de calidad en todo lo que hacemos. Valoramos la colaboración, promoviendo un ambiente de trabajo en equipo y cooperación tanto dentro de la empresa como con nuestros clientes. Finalmente, nuestra orientación al cliente nos impulsa a guiar a las empresas constructoras hacia el éxito, siempre poniendo sus necesidades y objetivos en primer lugar.',
    image: imagesArray.imgValues,
  };

  const headingQuestions = {
    title: 'Preguntas frecuentes.',
    text: 'Quieres saber un poco más sobre ¿qué hacemos y cómo lo hacemos? A continuación te dejamos una lista de preguntas frecuentes para que aclares tus dudas iniciales.',
  };

  return (
    <div className="about">
      <Introduction
        heading={headingIntroAbout}
        cardsList={cardsListIntroAbout}
        background="normal"
      />
      <div className={`${styles['section-about']} ${'bg--dark'}`}>
        <Services id="about-origin" heading={headingOrigin} background="dark" />
        <Services
          id="about-philosophy"
          heading={headingPhilosophy}
          background="dark"
        />
        <Services id="about-values" heading={headingValues} background="dark" />
        <Services
          id="about-questions"
          heading={headingQuestions}
          background="dark"
        />
      </div>
    </div>
  );
};

export default About;
