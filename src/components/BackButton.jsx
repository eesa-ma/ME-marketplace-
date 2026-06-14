import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(-1)} 
      className="back-btn"
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px', 
        marginBottom: '20px', 
        fontSize: '0.9rem', 
        fontWeight: '600',
        color: 'var(--text-secondary)'
      }}
    >
      <ArrowLeft size={18} /> Back
    </button>
  );
};

export default BackButton;
