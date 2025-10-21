import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectCard } from '../components';
import { H1 } from '../mini-components/h1/H1';
import type { Project } from '../components/projectCard/ProjectCard.interface';
import projectsData from '../data/projects.json';
import './ProjectsPage.css';

interface FilterState {
  technique: string;
  support: string;
  style: string;
  availability: string;
}

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const projects: Project[] = projectsData as Project[];
  
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterState>({
    technique: '',
    support: '',
    style: '',
    availability: '',
  });

  const projectsPerPage = 12;

  // Extraer valores únicos de los datos
  const uniqueTechniques = Array.from(new Set(projects.map(p => p.metadata?.technique).filter(Boolean))) as string[];
  const uniqueSupports = Array.from(new Set(projects.map(p => p.metadata?.support).filter(Boolean))) as string[];
  const uniqueStyles = Array.from(new Set(projects.map(p => p.metadata?.style).filter(Boolean))) as string[];
  const uniqueAvailabilities = Array.from(new Set(projects.map(p => p.availability).filter(Boolean))) as string[];

  // Filtrar proyectos
  const filteredProjects = projects.filter((project) => {
    const technique = !filters.technique || (project.metadata?.technique && project.metadata.technique === filters.technique);
    const support = !filters.support || (project.metadata?.support && project.metadata.support === filters.support);
    const style = !filters.style || (project.metadata?.style && project.metadata.style === filters.style);
    const availability = !filters.availability || (project.availability && project.availability === filters.availability);

    return technique && support && style && availability;
  });

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  const handleViewProject = (project: Project) => {
    console.log('Ver proyecto:', project);
  };

  const handleBuyProject = (project: Project) => {
    console.log('Comprar proyecto:', project);
  };

  const handleWhatsApp = (project: Project) => {
    console.log('Contactar por WhatsApp:', project);
  };

  const handleToggleFavorite = (project: Project) => {
    console.log('Toggle favorito:', project);
  };

  const toggleFilter = (filterType: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType] === value ? '' : value,
    }));
    setCurrentPage(1); // Reset a la primera página
  };

  const handleBackToGallery = () => {
    navigate('/');
  };

  return (
    <div className="projects-page">
      <div className="projects-page__header">
        <button 
          className="projects-page__back-btn"
          onClick={handleBackToGallery}
          aria-label="Volver a la galería"
        >
          ← Volver
        </button>
        <H1 className="projects-page__title">Todos los Proyectos</H1>
      </div>

      <div className="projects-page__container">
        {/* Filtros horizontales */}
        <div className="projects-page__filters">
          {uniqueTechniques.length > 0 && (
            <div className="filter-group">
              <select
                id="technique-select"
                className="filter-select"
                value={filters.technique}
                onChange={(e) => toggleFilter('technique', e.target.value)}
              >
                <option value="">Técnica</option>
                {uniqueTechniques.map((technique) => (
                  <option key={technique} value={technique}>
                    {technique}
                  </option>
                ))}
              </select>
            </div>
          )}

          {uniqueSupports.length > 0 && (
            <div className="filter-group">
              <select
                id="support-select"
                className="filter-select"
                value={filters.support}
                onChange={(e) => toggleFilter('support', e.target.value)}
              >
                <option value="">Soporte</option>
                {uniqueSupports.map((support) => (
                  <option key={support} value={support}>
                    {support}
                  </option>
                ))}
              </select>
            </div>
          )}

          {uniqueStyles.length > 0 && (
            <div className="filter-group">
              <select
                id="style-select"
                className="filter-select"
                value={filters.style}
                onChange={(e) => toggleFilter('style', e.target.value)}
              >
                <option value="">Estilo</option>
                {uniqueStyles.map((style) => (
                  <option key={style} value={style}>
                    {style}
                  </option>
                ))}
              </select>
            </div>
          )}

          {uniqueAvailabilities.length > 0 && (
            <div className="filter-group">
              <select
                id="availability-select"
                className="filter-select"
                value={filters.availability}
                onChange={(e) => toggleFilter('availability', e.target.value)}
              >
                <option value="">Disponibilidad</option>
                {uniqueAvailabilities.map((availability) => (
                  <option key={availability} value={availability}>
                    {availability}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Grid de proyectos */}
        <div className="projects-page__content">
          {paginatedProjects.length > 0 ? (
            <>
              <div className="projects-page__grid">
                {paginatedProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onViewProject={handleViewProject}
                    onBuyProject={handleBuyProject}
                    onWhatsApp={handleWhatsApp}
                    onToggleFavorite={handleToggleFavorite}
                    isFavorite={false}
                    className="projects-page__card"
                  />
                ))}
              </div>

              {/* Paginación */}
              {totalPages > 1 && (
                <div className="projects-page__pagination">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="pagination-btn"
                  >
                    Anterior
                  </button>

                  <div className="pagination-numbers">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`pagination-number ${page === currentPage ? 'active' : ''}`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="pagination-btn"
                  >
                    Siguiente
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="projects-page__no-results">
              <p>No se encontraron proyectos con los filtros seleccionados.</p>
            </div>
          )}

          {/* Información de resultados */}
          <div className="projects-page__info">
            <p>
              Mostrando {startIndex + 1}-{Math.min(endIndex, filteredProjects.length)} de {filteredProjects.length} proyectos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
