import React from 'react';
import type { SpinnerProps } from './Spinner.interface';
import './Spinner.css';

const Spinner: React.FC<SpinnerProps> = ({ 
  className = '' 
}) => {
  return (
    <div 
      className={`spinner-container ${className}`.trim()}
      role="status"
      aria-label="Loading"
    >
      <img 
        src="/icons/logoVino.svg" 
        alt="Loading..." 
        className="spinner-icon"
      />
      <div className="spinner-orbit">
        <div className="spinner-dot"></div>
        <div className="spinner-dot"></div>
        <div className="spinner-dot"></div>
        <div className="spinner-dot"></div>
        <div className="spinner-dot"></div>
        <div className="spinner-dot"></div>
        <div className="spinner-dot"></div>
      </div>
    </div>
  );
};

export default Spinner;
