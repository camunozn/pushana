import React from 'react';
import Introduction from '../../modules/section-intro/Introduction';

const Blog = () => {
  const headingIntroBlog = {
    title:
      'Explora nuevas ideas, buenas prácticas y mucho más con nuestro blog.',
    text: 'Artículos prácticos sobre gestión de proyectos, automatización de procesos y la industria de la construcción.',
  };

  const cardsListIntroBlog = [
    {
      icon: 'fa-solid fa-chart-gantt',
      title: 'Gestión de proyectos',
      style: 'primary',
    },
    {
      icon: 'fa-solid fa-gears',
      title: 'Automatización de procesos',
      style: 'primary',
    },
    {
      icon: 'fa-solid fa-helmet-safety',
      title: 'Construcción y más',
      style: 'primary',
    },
  ];
  return (
    <div className="blog">
      <Introduction heading={headingIntroBlog} cardsList={cardsListIntroBlog} />
    </div>
  );
};

export default Blog;
