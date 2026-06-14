import React from 'react';

const Logo = ({ className }) => (
  <svg 
    width="160" 
    height="40" 
    viewBox="0 0 160 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C22.4578 35 24.7709 34.4069 26.8086 33.3601C22.6845 32.4815 19.5 28.8123 19.5 24.4091C19.5 19.2125 23.7125 15 28.9091 15C30.3421 15 31.6918 15.3197 32.9015 15.892C30.8066 9.54486 24.8118 5 17.7778 5" 
      fill="currentColor"
    />
    <text 
      x="40" 
      y="27" 
      fontFamily="Montserrat, sans-serif" 
      fontSize="18" 
      fontWeight="700" 
      fill="currentColor"
      letterSpacing="1"
    >
      LA LUNA
    </text>
  </svg>
);

export default Logo;
