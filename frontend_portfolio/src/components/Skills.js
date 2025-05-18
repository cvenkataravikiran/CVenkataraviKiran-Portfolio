import React from 'react';
import { useTheme } from './ThemeContext';

function Skills() {
  const { theme, isDarkMode } = useTheme();

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: 'fab fa-react' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        // { name: 'TypeScript', icon: 'fas fa-code' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap' }
        // { name: 'Redux', icon: 'fas fa-layer-group' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'Express.js', icon: 'fas fa-server' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'Java', icon: 'fab fa-java' },
        {name: 'SQLite', icon: 'fas fa-database'},
        // { name: 'Django', icon: 'fab fa-python' },
        // { name: 'MongoDB', icon: 'fas fa-database' },
        // { name: 'PostgreSQL', icon: 'fas fa-database' },
        // { name: 'REST APIs', icon: 'fas fa-server' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'GitHub', icon: 'fab fa-github' },
        // { name: 'Docker', icon: 'fab fa-docker' },
        // { name: 'AWS', icon: 'fab fa-aws' },
        // { name: 'CI/CD', icon: 'fas fa-infinity' },
        // { name: 'Agile', icon: 'fas fa-sync-alt' },
        // { name: 'Testing', icon: 'fas fa-vial' }
      ]
    }
  ];

  const SkillCard = ({ title, skills }) => (
    <div className="col-lg-4 mb-4">
      <div 
        className="p-4 rounded h-100"
        style={{
          backgroundColor: theme.cardBg,
          border: `1px solid ${theme.borderColor}`,
          boxShadow: `0 4px 6px ${theme.shadowColor}`,
          transition: 'all 0.3s ease-in-out'
        }}
      >
        <h3 
          className="h4 mb-4 text-center"
          style={{ color: theme.primaryColor }}
        >
          {title}
        </h3>
        <div className="row g-3">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="col-6"
            >
              <div
                className="p-3 rounded text-center"
                style={{
                  backgroundColor: isDarkMode ? 'rgba(187, 134, 252, 0.1)' : 'rgba(0, 123, 255, 0.1)',
                  border: `1px solid ${isDarkMode ? 'rgba(187, 134, 252, 0.2)' : 'rgba(0, 123, 255, 0.2)'}`,
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                <i 
                  className={`${skill.icon} fa-2x mb-2`}
                  style={{ 
                    color: theme.primaryColor,
                    display: 'block'
                  }}
                ></i>
                <span
                  style={{
                    color: theme.textColor,
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}
                >
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section 
      id="skills" 
      className="py-5"
      style={{
        backgroundColor: theme.backgroundColor,
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
          My Skills
        </h2>
        <div className="row">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;