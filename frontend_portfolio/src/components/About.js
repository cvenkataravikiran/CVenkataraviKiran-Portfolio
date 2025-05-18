import React from 'react';
import { useTheme } from './ThemeContext';

function About() {
  const { theme, isDarkMode } = useTheme();

  return (
    <section 
      id="about" 
      className="py-5"
      style={{
        backgroundColor: theme.cardBg,
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
          About Me
        </h2>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="profile-image-container">
              <img
                src="/profile-picture.png"
                alt="Professional Profile"
                className="img-fluid rounded-circle"
                style={{
                  boxShadow: `0 10px 30px ${theme.shadowColor}`,
                  border: `3px solid ${theme.primaryColor}`,
                  transition: 'all 0.3s ease-in-out',
                  maxWidth: '400px',
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  margin: '0 auto',
                  objectFit: 'contain',
                  aspectRatio: '1/1'
                }}
              />
              <div 
                className="image-overlay rounded-circle"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  background: `linear-gradient(45deg, ${theme.primaryColor}40, ${theme.secondaryColor}40)`,
                  opacity: '0',
                  transition: 'all 0.3s ease-in-out',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'translateY(0)'
                }}
              >
                {/* <div className="social-links">
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <i className="fab fa-github" style={{ color: theme.textColor, fontSize: '24px' }}></i>
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <i className="fab fa-linkedin" style={{ color: theme.textColor, fontSize: '24px' }}></i>
                  </a>
                </div> */}
              </div>
            </div>
            <style>
              {`
                .profile-image-container {
                  position: relative;
                  cursor: pointer;
                  max-width: 400px;
                  margin: 0 auto;
                  border-radius: 50%;
                  overflow: hidden;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                .profile-image-container:hover .image-overlay {
                  opacity: 1;
                }
                .profile-image-container:hover img {
                  transform: scale(1.02);
                }
                .social-links a {
                  transition: all 0.3s ease-in-out;
                }
                .social-links a:hover {
                  transform: translateY(-3px);
                }
              `}
            </style>
          </div>
          <div className="col-lg-6">
            <div 
              className="p-4 rounded"
              style={{
                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                border: `1px solid ${theme.borderColor}`
              }}
            >
              <h3 
                className="mb-4"
                style={{ color: theme.textColor }}
              >
                Who I Am
              </h3>
              <p style={{ color: theme.mutedText }}>
             <h5>
             I am a final-year BSc Computer Science student with a strong foundation in Web Development. I am passionate about exploring AI/ML concepts and actively use AI tools to develop intelligent, user-centric digital solutions with a detail-oriented approach and a commitment to continuous learning, I aim to contribute to innovative, real-world technology projects that make a meaningful impact.
            </h5></p>
              {/* <div className="mt-4">
                <h4 
                  className="mb-3"
                  style={{ color: theme.textColor }}
                >
                  Quick Facts
                </h4>
                <ul className="list-unstyled">
                  {[
                    '5+ Years of Development Experience',
                    'Worked with Fortune 500 Companies',
                    'Led Multiple Successful Projects',
                    'Open Source Contributor'
                  ].map((fact, index) => (
                    <li 
                      key={index} 
                      className="mb-2"
                      style={{ color: theme.mutedText }}
                    >
                      <i 
                        className="fas fa-check-circle me-2"
                        style={{ color: theme.success }}
                      ></i>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
