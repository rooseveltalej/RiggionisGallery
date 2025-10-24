import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectCard } from '../components';
import { H1 } from '../mini-components/h1/H1';
import Button from '../mini-components/Button/Button';
import { useLanguage } from '../hooks';
import type { Project } from '../components/projectCard/ProjectCard.interface';
import projectsData from '../data/projects.json';
import './Gallery.css';

const Gallery: React.FC = () => {
  const { languageStrings } = useLanguage();
  const navigate = useNavigate();
  const projects: Project[] = (projectsData as Project[]).slice(0, 9);

  const handleViewProject = (project: Project) => {
    console.log('Ver proyecto:', project);
    // TODO: AQUI VA LA LÓGICA PARA NAVEGAR A LA PÁGINA DE DETALLES DEL PROYECTO
  };

  const handleBuyProject = (project: Project) => {
    console.log('Comprar proyecto:', project);
    // TODO: AQUI VA LA LÓGICA PARA EL PROCESO DE COMPRA
  };

  const handleWhatsApp = (project: Project) => {
    console.log('Contactar por WhatsApp:', project);
    // TODO: AQUI VA LA LÓGICA PARA ABRIR WHATSAPP CON EL PROYECTO
  };

  const handleToggleFavorite = (project: Project) => {
    console.log('Toggle favorito:', project);
    // TODO: AQUI VA LA LÓGICA PARA MANEJAR FAVORITOS
  };



  return (
    <div className="gallery">
      <div className="gallery__header">
        <H1 className="gallery__title">{languageStrings?.gallery_page?.title}</H1>
        <Button 
          text={languageStrings?.general_titles?.see_more}
          onClick={() => navigate('/projects')}
          className="gallery__view-more-btn"
        />
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
