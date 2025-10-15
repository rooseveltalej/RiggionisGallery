import React from 'react';
import { ProjectCard } from '../components';
import { H1 } from '../mini-components/h1/H1';
import { useLanguage } from '../hooks';
import type { Project } from '../components/projectCard/ProjectCard.interface';
import projectsData from '../data/projects.json';
import './Gallery.css';

const Gallery: React.FC = () => {
  const { languageStrings } = useLanguage();
  const projects: Project[] = projectsData as Project[];

  const handleViewProject = (project: Project) => {
    console.log('Ver proyecto:', project);
    // Aquí irá la lógica para navegar a la página de detalles del proyecto
  };

  const handleBuyProject = (project: Project) => {
    console.log('Comprar proyecto:', project);
    // Aquí irá la lógica para el proceso de compra
  };

  const handleWhatsApp = (project: Project) => {
    console.log('Contactar por WhatsApp:', project);
    // Aquí irá la lógica para abrir WhatsApp con el proyecto
  };

  const handleToggleFavorite = (project: Project) => {
    console.log('Toggle favorito:', project);
    // Aquí irá la lógica para manejar favoritos
  };

  return (
    <div className="gallery">
      <div className="gallery__header">
        <H1 className="gallery__title">{languageStrings?.gallery_page?.title}</H1>
      </div>
      
      <div className="gallery__grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onViewProject={handleViewProject}
            onBuyProject={handleBuyProject}
            onWhatsApp={handleWhatsApp}
            onToggleFavorite={handleToggleFavorite}
            isFavorite={false} // Por ahora todos empiezan como no favoritos
            className="gallery__card"
            // Pasar textos desde remote config si es necesario
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
