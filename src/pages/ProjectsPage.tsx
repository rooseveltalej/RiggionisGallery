import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Project } from '@/components/projectCard/ProjectCard.interface';
import projectsData from '../data/projects.json';
import { ProjectFiltersSection } from '../components/projectsPage/ProjectFiltersSection';
import { ProjectsGrid } from '../components/projectsPage/ProjectsGrid';
import { Pagination } from '../components/projectsPage/Pagination';
import { ProjectsHeader } from '../components/projectsPage/ProjectsHeader';
import type { FilterState, FilterOptions } from '../components/projectsPage/models/projectsPage.models';
import './ProjectsPage.css';

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
  const filterOptions: FilterOptions = {
    techniques: Array.from(new Set(projects.map(p => p.metadata?.technique).filter(Boolean))) as string[],
    supports: Array.from(new Set(projects.map(p => p.metadata?.support).filter(Boolean))) as string[],
    styles: Array.from(new Set(projects.map(p => p.metadata?.style).filter(Boolean))) as string[],
    availabilities: Array.from(new Set(projects.map(p => p.availability).filter(Boolean))) as string[],
  };

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

  // Handlers
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

  const handleFilterChange = (filterType: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType] === value ? '' : value,
    }));
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleBackToGallery = () => {
    navigate('/');
  };

  return (
    <div className="projects-page">
      <ProjectsHeader onBackClick={handleBackToGallery} />

      <div className="projects-page__container">
        <ProjectFiltersSection 
          filters={filters}
          options={filterOptions}
          onFilterChange={handleFilterChange}
        />

        <div className="projects-page__content">
          <ProjectsGrid 
            projects={paginatedProjects}
            onViewProject={handleViewProject}
            onBuyProject={handleBuyProject}
            onWhatsApp={handleWhatsApp}
            onToggleFavorite={handleToggleFavorite}
          />

          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            startIndex={startIndex}
            endIndex={endIndex}
            totalItems={filteredProjects.length}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
