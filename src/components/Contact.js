import React from 'react';
import './Contact.css';
import mailIcon from '../images/mailIcon.png';
import linkedInIcon from '../images/linkedinIcon.png';
import githubIcon from '../images/githubIcon.png';
import documentIcon from '../images/documentIcon.png';


function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-info">
        <h2>Contact Me</h2>
        <a href="mailto:rafaelsanchezjrcs@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={mailIcon} alt="Email" style={{ width: '30px', height: '30px' }} className="contact-icon" />
        </a>
        <a href="https://www.linkedin.com/in/rafaelsanchezjr2" target="_blank" rel="noopener noreferrer">
          <img src={linkedInIcon} style={{ width: '30px', height: '30px' }} alt="LinkedIn" className="contact-icon" />
        </a>
        <a href="https://github.com/Rsanch40" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} style={{ width: '30px', height: '30px' }} alt="github" className="contact-icon" />
        </a>
        <a href="/Rafael Sanchez Jr's Resume(2025).pdf" download="Rafael_Sanchez_Jr's_Resume.pdf">
          <img src={documentIcon} style={{ width: '30px', height: '30px' }} alt="Resume" className="contact-icon" />
        </a>

      </div>
      {/*
      <div className="contact-image">
        <img src='../images/learningBookPic.png' alt="Profile or placeholder" />
      </div>
      */}
      <footer className="contact-footer">
        <p>© 2024 Made by Rafael Sanchez Jr</p>
      </footer>
    </section>
  );
}

export default Contact;
