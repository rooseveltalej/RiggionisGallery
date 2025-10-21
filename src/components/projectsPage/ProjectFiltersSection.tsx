import React from 'react';
import type { FilterState, FilterOptions } from './models/projectsPage.models';

interface ProjectFiltersProps {
  filters: FilterState;
  options: FilterOptions;
  onFilterChange: (filterType: keyof FilterState, value: string) => void;
}

export const ProjectFiltersSection: React.FC<ProjectFiltersProps> = ({
  filters,
  options,
  onFilterChange,
}) => {
  return (
    <div className="projects-page__filters">
      {options.techniques.length > 0 && (
        <div className="filter-group">
          <select
            id="technique-select"
            className="filter-select"
            value={filters.technique}
            onChange={(e) => onFilterChange('technique', e.target.value)}
          >
            <option value="">Técnica</option>
            {options.techniques.map((technique) => (
              <option key={technique} value={technique}>
                {technique}
              </option>
            ))}
          </select>
        </div>
      )}

      {options.supports.length > 0 && (
        <div className="filter-group">
          <select
            id="support-select"
            className="filter-select"
            value={filters.support}
            onChange={(e) => onFilterChange('support', e.target.value)}
          >
            <option value="">Soporte</option>
            {options.supports.map((support) => (
              <option key={support} value={support}>
                {support}
              </option>
            ))}
          </select>
        </div>
      )}

      {options.styles.length > 0 && (
        <div className="filter-group">
          <select
            id="style-select"
            className="filter-select"
            value={filters.style}
            onChange={(e) => onFilterChange('style', e.target.value)}
          >
            <option value="">Estilo</option>
            {options.styles.map((style) => (
              <option key={style} value={style}>
                {style}
              </option>
            ))}
          </select>
        </div>
      )}

      {options.availabilities.length > 0 && (
        <div className="filter-group">
          <select
            id="availability-select"
            className="filter-select"
            value={filters.availability}
            onChange={(e) => onFilterChange('availability', e.target.value)}
          >
            <option value="">Disponibilidad</option>
            {options.availabilities.map((availability) => (
              <option key={availability} value={availability}>
                {availability}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};
