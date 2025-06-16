import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

// Import images
import image1 from '../images/QueueTheSong.png';
import image2 from '../images/OutTherePic.png';
import image4 from '../images/learningBookPic.png';
import image5 from '../images/ESApic.png';
import image3 from '../images/portfolioWebPic.png';
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
    { id: 1, title: 'Queue The Song - A Spotify App', language: 'React.js, Node.js, Tailwind CSS, AWS, Spotify Web API', description: 'A Web App using Spotify API to display currently-playing song, user queue, and allow users to automatically queue songs when conditions are met', image: image1, link: 'https://github.com/Rsanch40/Queue-The-Song'},
    { id: 2, title: 'OutThere', language: 'Java, JavaFX', description: 'A small event finder, for individuals to advertise street performances, art events, small concerts, and food events', image: image2, link: 'https://github.com/julianmackenzie/SparkHacks2023' },
    { id: 3, title: 'Portfolio Website', language: 'React.js, Node.js, HTML, CSS, Firebase', description: 'This Website!', image: image3, link: 'https://github.com/Rsanch40/MyPortfolioWebsite' },
    { id: 4, title: 'LearningBook', language: 'HTML, CSS, JavaScript', description: 'A web prototype for a mobile app which aims to improve English proficiency through reading, vocabulary, audio, and translation', image: image4, link: 'https://github.com/Rsanch40/CS-422-Project' },
    { id: 5, title: 'Endangered Species Analysis', language: 'Python, Pandas', description: 'A data analysis project that looks into endangered species and the cause of their endangerment. Includes analysis from Machine Learning techniques such as Neural Networks', image: image5, link: 'https://github.com/Rsanch40/Endangered-Species-Data-Project.git'},
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
