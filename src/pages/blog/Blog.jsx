import React from 'react';
import Introduction from '../../modules/section-intro/Introduction';

const Blog = () => {
  const headingIntroBlog = {
    title:
      'Explora nuevas ideas, buenas prácticas y mucho más con nuestro blog.',
    text: 'Artículos prácticos sobre gestión de proyectos, transformación digital, la industria de la construcción y más.',
  };

  const cardsListIntroBlog = [
    {
      icon: 'fa-solid fa-chart-gantt',
      title: 'Gestión de proyectos',
      style: 'primary',
    },
    {
      icon: 'fa-solid fa-laptop-file',
      title: 'Transformación digital',
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
