import React, { useRef, useEffect } from 'react';
import { H2 } from '@/mini-components/h2/H2';
import { useSimilarProjects } from '@/hooks';
import SimilarProjectCard from '../SimilarProjectCard/SimilarProjectCard';
import type { SimilarProjectsProps } from './SimilarProjects.interface';
import './SimilarProjects.css';

const SimilarProjects: React.FC<SimilarProjectsProps> = ({ 
  projectId,
  projects,
  title,
  className = ''
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { similarProjects, handleViewProject } = useSimilarProjects({
    projectId,
    projects
  });

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollRef.current) {
        e.preventDefault();
        scrollRef.current.scrollLeft += e.deltaY;
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  if (similarProjects.length === 0) {
    return null;
  }

  return (
    <section className={`similar-projects ${className}`.trim()}>
      <H2 className="similar-projects__title">{title}</H2>
      
      <div ref={scrollRef} className="similar-projects__grid">
        {similarProjects.map(project => (
          <SimilarProjectCard
            key={project.id}
            project={project}
            onViewProject={handleViewProject}
          />
        ))}
      </div>
    </section>
  );
};

export default SimilarProjects;
