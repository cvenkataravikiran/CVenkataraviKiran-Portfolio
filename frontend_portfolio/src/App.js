import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import Navbar from './components/Navbar';

function AppContent() {
  const { theme } = useTheme();

  // Fetch data from backend example
  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    fetch(`${apiUrl}/api/endpoint`)
      .then(res => res.json())
      .then(data => console.log('Backend data:', data))
      .catch(err => console.error('API fetch error:', err));
  }, []);

  return (
    <div 
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <Hero />
      <About />
      <Navbar/>
      <Skills />
      <Projects />
      <Education />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;