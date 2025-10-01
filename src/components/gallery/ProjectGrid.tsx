import React, { useState } from 'react';
import './ProjectGrid.css';

//TODO: This code is just for now, to simulate how gonna looks the page in the future

// todo: The interfaces should be in a separate file
interface ProjectGridProps {
  general_titles: any;
  gallery_titles: any;
}


const ProjectGrid: React.FC<ProjectGridProps> = ({ general_titles, gallery_titles }) => {
  // TODO: This data is just for now, replace with real data fetching logic
  const mockProjectsByTechnique = {
    oil: Array.from({ length: 8 }, (_, index) => ({
      id: `oil-${index + 1}`,
      title: `Óleo ${index + 1}`,
      technique: 'oil',
      support: index % 3 === 0 ? 'canvas' : index % 3 === 1 ? 'paper' : 'wood',
      style: index % 3 === 0 ? 'realism' : index % 3 === 1 ? 'impressionism' : 'abstract'
    })),
    acrylic: Array.from({ length: 6 }, (_, index) => ({
      id: `acrylic-${index + 1}`,
      title: `Acrílico ${index + 1}`,
      technique: 'acrylic',
      support: index % 3 === 0 ? 'canvas' : index % 3 === 1 ? 'paper' : 'wood',
      style: index % 3 === 0 ? 'pop-art' : index % 3 === 1 ? 'abstract' : 'surrealism'
    })),
    watercolor: Array.from({ length: 5 }, (_, index) => ({
      id: `watercolor-${index + 1}`,
      title: `Acuarela ${index + 1}`,
      technique: 'watercolor',
      support: 'paper',
      style: index % 2 === 0 ? 'impressionism' : 'abstract'
    }))
  };

  // TODO: We need to change this state management, and use redux 
  const [carouselStates, setCarouselStates] = useState({
    oil: { currentIndex: 0 },
    acrylic: { currentIndex: 0 },
    watercolor: { currentIndex: 0 }
  });

  const techniques = ['oil', 'acrylic', 'watercolor'] as const;
  
  const nextSlide = (technique: string) => {
    setCarouselStates(prev => {
      const projects = mockProjectsByTechnique[technique as keyof typeof mockProjectsByTechnique];
      const maxIndex = Math.max(0, projects.length - 3);
      return {
        ...prev,
        [technique]: {
          currentIndex: Math.min(prev[technique as keyof typeof prev].currentIndex + 1, maxIndex)
        }
      };
    });
  };

  const prevSlide = (technique: string) => {
    setCarouselStates(prev => ({
      ...prev,
      [technique]: {
        currentIndex: Math.max(prev[technique as keyof typeof prev].currentIndex - 1, 0)
      }
    }));
  };

  const getTechniqueName = (technique: string) => {
    return general_titles?.filters?.techniques?.[technique] || technique;
  };

  return (
    <div className="project-grid-container">
      {/* Header */}
      <div className="project-grid-header">
        <h1 className="project-grid-title">Galería de Proyectos</h1>
        
        {/* Barra de búsqueda */}
        <div className="search-container">
          <input
            type="text"
            placeholder={gallery_titles?.["search-placeholder"] || "Buscar obra..."}
            className="search-input"
          />
        </div>
      </div>

      {/* Secciones por técnica */}
      {techniques.map(technique => {
        const projects = mockProjectsByTechnique[technique];
        const currentIndex = carouselStates[technique].currentIndex;
        const canGoNext = currentIndex < projects.length - 3;
        const canGoPrev = currentIndex > 0;

        return (
          <div key={technique} className="technique-section">
            <div className="technique-header">
              <h2 className="technique-title">{getTechniqueName(technique)}</h2>
              <div className="carousel-controls">
                <button
                  onClick={() => prevSlide(technique)}
                  disabled={!canGoPrev}
                  className={`carousel-btn prev-btn ${!canGoPrev ? 'disabled' : ''}`}
                >
                  ‹
                </button>
                <span className="carousel-counter">
                  {Math.min(currentIndex + 3, projects.length)} de {projects.length}
                </span>
                <button
                  onClick={() => nextSlide(technique)}
                  disabled={!canGoNext}
                  className={`carousel-btn next-btn ${!canGoNext ? 'disabled' : ''}`}
                >
                  ›
                </button>
              </div>
            </div>

            <div className="carousel-container">
              <div 
                className="carousel-track"
                style={{
                  transform: `translateX(-${currentIndex * (100 / 3)}%)`
                }}
              >
                {projects.map((project) => (
                  <div key={project.id} className="project-card">
                    <div className="project-image-placeholder">
                      {/* Cuadro gris placeholder */}
                    </div>
                    <div className="project-info">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-details">
                        <span className="project-support">
                          {general_titles?.filters?.supports?.[project.support] || project.support}
                        </span>
                        <span className="project-separator"> • </span>
                        <span className="project-style">
                          {general_titles?.filters?.styles?.[project.style] || project.style}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectGrid;