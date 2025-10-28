import React from 'react';
import Button from '@/mini-components/Button/Button';
import { useLanguage } from '@/hooks/useLanguage';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  startIndex: number;
  endIndex: number;
  totalItems: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  startIndex,
  endIndex,
  totalItems,
}) => {
  const { languageStrings } = useLanguage();

  const backText = languageStrings?.general_titles?.buttons?.back;
  const nextText = languageStrings?.general_titles?.buttons?.next;
  const paginationStrings = languageStrings?.gallery_page?.pagination ?? {};
  const showingText = paginationStrings.showing;
  const ofText = paginationStrings.of;
  const projectsText = paginationStrings.projects;
  if (totalPages <= 1) {
    return null;
  }

  return (
    <>
      <div className="projects-page__pagination">
        <Button
          text={backText}
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="pagination-btn"
        />

        <div className="pagination-numbers">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              text={page.toString()}
              onClick={() => onPageChange(page)}
              className={`pagination-number ${page === currentPage ? 'active' : ''}`}
            />
          ))}
        </div>

        <Button
          text={nextText}
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="pagination-btn"
        />
      </div>

      {totalItems > 0 && (
        <div className="projects-page__info">
          <p>
            {showingText} {startIndex + 1}-{Math.min(endIndex, totalItems)} {ofText} {totalItems} {projectsText}
          </p>
        </div>
      )}
    </>
  );
};
