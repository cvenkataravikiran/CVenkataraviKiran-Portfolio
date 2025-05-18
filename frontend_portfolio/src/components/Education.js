import React from 'react';
import { useTheme } from './ThemeContext';

function Education() {
  const { theme, isDarkMode } = useTheme();

  const education = [
    {
      period: '2022 - 2025',
      degree: 'Bachelor of Science (B.Sc) - Major in Computer Science, Mathematics & Statistics',
      institution: 'Indian Institute of Management and Commerce',
      // description: 'GPA: 8.5/10'
    },
    {
      period: '2020 - 2022',
      degree: 'Intermediate (M.P.C)',
      institution: 'Sri Gayatri Junior College',
      description: 'GPA: 86.9%'
    }
  ];

  const EducationCard = ({ item }) => (
    <div 
      className="mb-4 p-4 rounded"
      style={{
        backgroundColor: theme.cardBg,
        border: `1px solid ${theme.borderColor}`,
        boxShadow: `0 4px 6px ${theme.shadowColor}`,
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 
          className="h5 mb-0"
          style={{ color: theme.primaryColor }}
        >
          {item.degree}
        </h3>
        <span 
          className="badge"
          style={{
            backgroundColor: isDarkMode ? 'rgba(187, 134, 252, 0.1)' : 'rgba(0, 123, 255, 0.1)',
            color: theme.primaryColor,
            border: `1px solid ${theme.primaryColor}`
          }}
        >
          {item.period}
        </span>
      </div>
      <h4 
        className="h6 mb-3"
        style={{ color: theme.secondaryColor }}
      >
        {item.institution}
      </h4>
      <p 
        className="mb-0"
        style={{ color: theme.mutedText }}
      >
        {item.description}
      </p>
    </div>
  );

  return (
    <section 
      id="education" 
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
          Education
        </h2>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div
              style={{
                borderLeft: `3px solid ${theme.primaryColor}`,
                paddingLeft: '20px'
              }}
            >
              {education.map((edu, index) => (
                <EducationCard key={index} item={edu} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;