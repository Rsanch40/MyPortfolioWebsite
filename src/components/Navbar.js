import React, { useState, useEffect } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home'); // Default to "home"

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'contact'];
      let currentSection = '';

      // Loop through each section and check if it’s in the viewport
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          // Check if the section is in the viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection || 'home'); // Default to 'home' if no section is in view
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav style={navbarStyle}>
      <a href="#home" style={{ ...linkStyle, ...(activeSection === 'home' ? activeLinkStyle : {}) }}>Home</a>
      <a href="#projects" style={{ ...linkStyle, ...(activeSection === 'projects' ? activeLinkStyle : {}) }}>Projects</a>
      <a href="#contact" style={{ ...linkStyle, ...(activeSection === 'contact' ? activeLinkStyle : {}) }}>Contact</a>
    </nav>
  );
}

const navbarStyle = {
  position: 'fixed',
  top: 0,
  width: '100%',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'flex-end', 
  gap: '2rem',
  zIndex: 1000,
  boxSizing: 'border-box',
  paddingRight: '2rem',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.2rem',
};

const activeLinkStyle = {
  color: '#007bff',
  fontWeight: 'bold',
};

export default Navbar;
