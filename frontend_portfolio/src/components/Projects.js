import React from 'react';
import { useTheme } from './ThemeContext';

function Projects() {
  const { theme, isDarkMode } = useTheme();

  const projects = [
    {
      title: 'Smart Healthcare Web Application',
      description: 'A comprehensive healthcare platform featuring symptom checking, hospital locator, and health tracking capabilities. Built with modern web technologies and focused on user experience.',
      image: '/images/projects/smart-healthcare.png',
      technologies: ['React', 'Node.js', 'Express.js', 'SQLite', 'Google Maps API', 'Bootstrap CSS'],
      liveLink: 'https://drive.google.com/file/d/1dnLfl8pd3IZf-EHRgDO3GqoGCMc5Sv9u/view?usp=drive_link',
      githubLink: 'https://github.com/cvenkataravikiran/Smart-Healthcare-WebApp-Frontend.git#'
    },
    {
      title: 'C Venkata Ravi Kiran - Portfolio ',
      description: '',
      image: '',
      technologies: ['React', 'Node.js', 'Express.js', 'Bootstrap CSS'],
      liveLink: '',
      githubLink: ''
    }
    // {
    //   title: 'Task Management App',
    //   description: 'A real-time task management application with drag-and-drop functionality.',
    //   image: 'https://via.placeholder.com/600x400',
    //   technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
    //   liveLink: '#',
    //   githubLink: '#'
    // },
    // {
    //   title: 'AI Chat Application',
    //   description: 'An AI-powered chat application with natural language processing.',
    //   image: 'https://via.placeholder.com/600x400',
    //   technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    //   liveLink: '#',
    //   githubLink: '#'
    // }
  ];

  const ProjectCard = ({ project }) => (
    <div className="col-lg-4 mb-4">
      <div 
        className="card h-100"
        style={{
          backgroundColor: theme.cardBg,
          border: `1px solid ${theme.borderColor}`,
          boxShadow: `0 4px 6px ${theme.shadowColor}`,
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: `0 8px 12px ${theme.shadowColor}`
          }
        }}
      >
        <div className="position-relative">
          <img 
            src={project.image} 
            className="card-img-top" 
            alt={project.title}
            style={{
              borderBottom: `1px solid ${theme.borderColor}`,
              height: '200px',
              objectFit: 'cover',
              objectPosition: 'top'
            }}
          />
          <div 
            className="project-overlay"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(to bottom, transparent 0%, ${theme.cardBg} 100%)`,
              opacity: 0.2
            }}
          />
        </div>
        <div className="card-body">
          <h3 
            className="card-title h5 mb-3"
            style={{ color: theme.primaryColor }}
          >
            {project.title}
          </h3>
          <p 
            className="card-text mb-3"
            style={{ color: theme.mutedText }}
          >
            {project.description}
          </p>
          <div className="d-flex flex-wrap gap-2 mb-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded-pill"
                style={{
                  backgroundColor: isDarkMode ? 'rgba(187, 134, 252, 0.1)' : 'rgba(0, 123, 255, 0.1)',
                  color: theme.primaryColor,
                  fontSize: '0.8rem',
                  border: `1px solid ${theme.primaryColor}`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="d-flex gap-2">
            <a
              href={project.liveLink}
              className="btn btn-sm"
              style={{
                backgroundColor: theme.primaryColor,
                color: '#ffffff',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              Video Demo
            </a>
            <a
              href={project.githubLink}
              className="btn btn-sm"
              style={{
                backgroundColor: 'transparent',
                border: `1px solid ${theme.primaryColor}`,
                color: theme.primaryColor,
                transition: 'all 0.3s ease-in-out'
              }}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section 
      id="projects" 
      className="py-5"
      style={{
        backgroundColor: isDarkMode ? theme.cardBg : '#f8f9fa',
        color: theme.textColor,
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <div className="container py-5">
        <h2 
          className="text-center mb-5"
          style={{
            color: theme.primaryColor,
            textShadow: isDarkMode ? '2px 2px 4px rgba(0, 0, 0, 0.3)' : 'none'
          }}
        >
          My Projects
        </h2>
        <div className="row">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
