import React from 'react';

const MoonIcon = ({ fillLevel = 1 }) => {
  // fillLevel is between 0 and 1
  // 1 = Full Moon, 0 = New Moon (Outline)
  
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '2px' }}>
      {/* Background Circle (Outline) */}
      <circle cx="12" cy="12" r="9" stroke="var(--accent)" strokeWidth="1.5" />
      
      {/* Moon Phase Logic using a clip path or simple paths */}
      {fillLevel > 0 && (
        <path 
          d={fillLevel >= 1 
            ? "M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" 
            : fillLevel >= 0.5 
              ? "M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21V3Z" // Half Moon
              : "M12 3C9.51472 3 7.5 7.02944 7.5 12C7.5 16.9706 9.51472 21 12 21V3Z" // Crescentish
          } 
          fill="var(--accent)" 
        />
      )}
    </svg>
  );
};

const MoonRating = ({ rating = 0, count }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    let fill = 0;
    if (rating >= i) {
      fill = 1;
    } else if (rating > i - 1) {
      fill = rating - (i - 1);
    }
    stars.push(<MoonIcon key={i} fillLevel={fill} />);
  }

  return (
    <div className="moon-rating" style={{ display: 'flex', alignItems: 'center' }}>
      {stars}
      {count && <span style={{ marginLeft: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>({count})</span>}
    </div>
  );
};

export default MoonRating;
