import React, { useState } from 'react';
import image1 from '../images/learningBookPic.png';


function ProjectCard({ title, language, description, image, link }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(link, '_blank');
  };
  

  return (
    <div style={{...cardStyle, ...(isHovered ? cardHoverStyle : {}),}}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ ...imagePlaceholder, backgroundImage: `url(${image})` }}></div>
      <h3>{title}</h3>
      <h4>{language}</h4>
      <p>{description}</p>
    </div>
  );
}

const cardStyle = {
  backgroundColor: '#1e1e1e',
  color: '#ffffff',
  width: '300px',
  padding: '1rem',
  textAlign: 'left',
  borderRadius: '8px',
  cursor: 'pointer',
  boxShadow: '0px 4px 8px rgba(10, 132, 255, 0.2)',
  transition: 'transform 0.5s ease',

};
const imagePlaceholder = {
  width: '100%',
  height: '200px',
  backgroundColor: '#333',
  backgroundImage: `url(${image1})`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat', // Prevents tiling if image is smaller than the container
  marginBottom: '1rem',
};

const cardHoverStyle = {
  transform: 'scale(1.05)',
  boxShadow: '0px 4px 8px rgba(255, 255, 255, 0.2)',

};

export default ProjectCard;
