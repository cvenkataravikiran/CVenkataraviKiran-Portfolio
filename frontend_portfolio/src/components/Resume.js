import React from 'react';
import { useTheme } from './ThemeContext';

function Resume() {
  const { theme, isDarkMode } = useTheme();

  const handleDownload = () => {
    // Replace this URL with the actual path to your resume PDF
    const pdfUrl = 'Venkataravikiran.challa_Resume.pdf';
    window.open(pdfUrl, '_blank');
  };

  return (
    <section 
      id="resume" 
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
          Resume
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div 
              className="p-4 rounded"
              style={{
                backgroundColor: theme.cardBg,
                border: `1px solid ${theme.borderColor}`,
                boxShadow: `0 4px 6px ${theme.shadowColor}`
              }}
            >
              <p className="mb-4" style={{ color: theme.mutedText }}>
                View or download my complete resume to know more about my skills, projects , experience, and qualifications.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <button
                  onClick={handleDownload}
                  className="btn btn-lg"
                  style={{
                    backgroundColor: theme.primaryColor,
                    color: '#ffffff',
                    border: 'none',
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  <i className="fas fa-download me-2"></i>
                  Download Resume
                </button>
                <button
                  onClick={handleDownload}
                  className="btn btn-lg"
                  style={{
                    backgroundColor: 'transparent',
                    border: `1px solid ${theme.primaryColor}`,
                    color: theme.primaryColor,
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  <i className="fas fa-eye me-2"></i>
                  View Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume; 