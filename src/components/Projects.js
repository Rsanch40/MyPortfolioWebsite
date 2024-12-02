import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

// Import images
import image1 from '../images/OutTherePic.png';
import image2 from '../images/learningBookPic.png';
import image3 from '../images/ESApic.png';
import image4 from '../images/portfolioWebPic.png';
//import image5 from '../images/learningBookPic.png';

function Projects() {
  const titleRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const title = titleRef.current;
      const project = projectRef.current;
      if (title) {
        const position = title.getBoundingClientRect().top;
        if (position < window.innerHeight) {
          title.style.opacity = '1';
          title.style.transform = 'translateY(0)';
          title.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        }
      }
      if(project) {
        const projPosition = project.getBoundingClientRect().top;
        if (projPosition < window.innerHeight) {
          project.style.opacity = '1';
          project.style.transform = 'translateY(0)';
          project.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const projects = [
    { id: 1, title: 'OutThere', language: 'Java, JavaFX', description: 'A small event finder, for individuals to advertise street performances, art events, small concerts, and food events', image: image1, link: 'https://github.com/julianmackenzie/SparkHacks2023' },
    { id: 2, title: 'LearningBook', language: 'HTML, CSS, JavaScript', description: 'A web prototype for a mobile app which aims to improve English proficiency through reading, vocabulary, audio, and translation', image: image2, link: 'https://github.com/Rsanch40/CS-422-Project' },
    { id: 3, title: 'Endangered Species Analysis', language: 'Python, SQL', description: 'A data analysis project that looks into endangered species and the cause of their endangerment. Includes analysis from Machine Learning techniques such as Neural Networks', image: image3, link: 'https://github.com/uic-ds-fall-2023/endangered-species-analysis-datax'},
    { id: 4, title: 'Portfolio Website', language: 'HTML, CSS, JavaScript, React', description: 'This Website!', image: image4, link: '#home' },
    { id: 5, title: 'Client Website', language: 'React, Tailwind CSS, Next.js', description: 'Car Detailing Website for a client. In progress...'},
  ];

  return (
    <section id="projects" style={sectionStyle}>
      <h2 ref={titleRef} style={titleStyle}>Projects</h2>
      <div ref={projectRef} style={projectsContainer}>
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            title={project.title} 
            language={project.language} 
            description={project.description} 
            image={project.image}
            link={project.link} 
          />
        ))}
      </div>
    </section>
  );
}

const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minHeight: 'auto', 
    color: '#ffffff',
    gap: '3rem',
    paddingTop: '2rem', // enough padding for title to appear below the navbar
  };
  
  const titleStyle = {
    opacity: 0,
    transform: 'translateY(20px)',
    textAlign: 'left', 
    paddingLeft: '3rem',
  };
  
  const projectsContainer = {
    transform: 'translateY(20px)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '5rem',
    width: '100%',
  };

export default Projects;
