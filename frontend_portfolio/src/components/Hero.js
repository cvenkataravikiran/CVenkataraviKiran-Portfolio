import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useTheme } from './ThemeContext';

function Hero() {
  const { theme, isDarkMode } = useTheme();
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Aspiring Software Developer',
    'BSc Computer Science @ IIMC',
    'AI/ML Enthusiastic',
    'Team Leader & Effective Communicator'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 100 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const buttonStyle = {
    backgroundColor: isDarkMode ? '#ffffff' : '#1a1a1a',
    color: isDarkMode ? '#1a1a1a' : '#ffffff',
    transition: 'all 0.3s ease-in-out',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.375rem',
    fontWeight: '500',
    textDecoration: 'none',
    display: 'inline-block',
    boxShadow: isDarkMode ? '0 4px 6px rgba(255, 255, 255, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: isDarkMode ? '0 6px 8px rgba(255, 255, 255, 0.2)' : '0 6px 8px rgba(0, 0, 0, 0.2)'
    }
  };

  return (
    <>
      <Navbar />
      <section 
        id="home" 
        className="min-vh-100 d-flex align-items-center px-3 pt-5"
        style={{
          background: theme.gradient,
          color: theme.textColor,
          transition: 'all 0.3s ease-in-out'
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 animate-fade-in">
              <h1 
                className="display-4 fw-bold mb-4"
                style={{
                  color: theme.textColor,
                  textShadow: isDarkMode ? '2px 2px 4px rgba(0, 0, 0, 0.3)' : 'none'
                }}
              >
                Hi, I'm <br />
                Challa Venkata Ravi Kiran
              </h1>
              <div 
                className="fs-4 mb-4"
                style={{
                  color: isDarkMode ? '#e0e0e0' : '#4a4a4a',
                  minHeight: '40px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {text}
                <span 
                  className="cursor"
                  style={{
                    display: 'inline-block',
                    width: '3px',
                    height: '1em',
                    marginLeft: '5px',
                    backgroundColor: isDarkMode ? '#e0e0e0' : '#4a4a4a',
                    animation: 'blink 1s step-end infinite'
                  }}
                />
              </div>
              <p 
                className="fs-5 fst-italic mb-4"
                style={{
                  color: isDarkMode ? theme.primaryColor : theme.secondaryColor,
                  fontWeight: '500',
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                Building impactful solutions with code.
              </p>
              <div className="d-flex gap-3">
                <a 
                  href="#projects" 
                  className="btn btn-lg"
                  style={buttonStyle}
                >
                  View Projects
                </a>
                <a 
                  href="#contact" 
                  className="btn btn-lg"
                  style={buttonStyle}
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block text-center">
              <div className="hero-illustration position-relative">
                <div 
                  className="floating-element code-window"
                  style={{
                    backgroundColor: theme.cardBg,
                    borderRadius: '12px',
                    padding: '20px',
                    boxShadow: `0 8px 32px ${theme.shadowColor}`,
                    transform: 'perspective(1000px) rotateY(-10deg)',
                    transition: 'all 0.3s ease-in-out',
                    border: `1px solid ${theme.borderColor}`,
                    maxWidth: '400px',
                    margin: '0 auto'
                  }}
                >
                  <div 
                    className="window-header"
                    style={{
                      borderBottom: `1px solid ${theme.borderColor}`,
                      paddingBottom: '10px',
                      marginBottom: '15px',
                      display: 'flex',
                      gap: '8px',
                      alignItems: 'center'
                    }}
                  >
                    <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: theme.error }} />
                    <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: theme.warning }} />
                    <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: theme.success }} />
                  </div>
                  <div 
                    className="code-content"
                    style={{
                      textAlign: 'left',
                      color: theme.primaryColor,
                      fontFamily: 'monospace'
                    }}
                  >
                    <p style={{ margin: '5px 0', color: theme.secondaryColor }}>// Web Development</p>
                    <p style={{ margin: '5px 0' }}>const skills = {`{`}</p>
                    <p style={{ margin: '5px 0', paddingLeft: '20px' }}>frontend:['React','Bootstrap'],</p>
                    <p style={{ margin: '5px 0', paddingLeft: '20px' }}>backend:['Node.js','Express,'SQLite'],</p>
                    <p style={{ margin: '5px 0', paddingLeft: '20px' }}>design:['UI/UX', 'Responsive']</p>
                    <p style={{ margin: '5px 0' }}>{`}`};</p>
                  </div>
                </div>
                <div 
                  className="floating-shapes"
                  style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    bottom: '0',
                    left: '0',
                    zIndex: '-1',
                    opacity: '0.7'
                  }}
                >
                  {/* Add decorative shapes */}
                </div>
              </div>
              <style>
                {`
                  .floating-element {
                    animation: float 6s ease-in-out infinite;
                  }
                  @keyframes float {
                    0%, 100% { transform: perspective(1000px) rotateY(-10deg) translateY(0px); }
                    50% { transform: perspective(1000px) rotateY(-10deg) translateY(-20px); }
                  }
                `}
              </style>
            </div>
          </div>
        </div>
      </section>
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
    </>
  );
}

export default Hero;