import React from 'react';
import { useTheme } from './ThemeContext';

function Footer() {
  const { theme, isDarkMode } = useTheme();

  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/cvenkataravikiran' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/venkataravikiran/' },
    // { icon: 'fab fa-twitter', url: 'https://twitter.com' },
    // { icon: 'fab fa-instagram', url: 'https://instagram.com' }
  ];

  return (
    <footer 
      className="py-4"
      style={{
        backgroundColor: isDarkMode ? '#1a1a1a' : '#f8f9fa',
        color: theme.textColor,
        borderTop: `1px solid ${theme.borderColor}`,
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <h3 
              className="h6 mb-0"
              style={{ color: theme.primaryColor }}
            >
              Challa Venkata Ravi Kiran
            </h3>
            <p 
              className="small mb-0"
              style={{ color: theme.mutedText }}
            >
              Aspiring Software Developer
            </p>
          </div>
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <div className="d-flex justify-content-center gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                  style={{
                    color: theme.mutedText,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      color: theme.primaryColor
                    }
                  }}
                >
                  <i className={`${link.icon} fa-lg`}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <p 
              className="small mb-0"
              style={{ color: theme.mutedText }}
            >
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;