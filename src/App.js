import React, { useEffect, useState } from 'react';
import './App.css';
import './components/Portfolio.css';

import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import DebugPanel from './components/DebugPanel';

function App() {
  // auth state (mock)
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem('pf_user');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  // Force a single 'midnight' (black) theme — remove theme switching UI per request
  const theme = 'midnight';
  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      if (user) localStorage.setItem('pf_user', JSON.stringify(user));
      else localStorage.removeItem('pf_user');
    } catch {}
  }, [user]);

  function handleLogin(credentials) {
    // mock login: accept any non-empty name/email
    setUser({ name: credentials.name || 'User', email: credentials.email || '' });
  }

  function handleLogout() {
    setUser(null);
  }

  // no toggle - theme is fixed to 'midnight'

  return (
    <div className={`App app-theme-${theme}`}>
      <SolarSystem />
      <Header
        isLoggedIn={!!user}
        user={user}
        onLogoutClick={handleLogout}
      />

      <main className="site-main">
        <Hero />

        <section id="about" className="section about-section">
          <About isFullStack />
        </section>

        <section id="projects" className="section projects-section">
          <Projects />
        </section>

        <section id="skills" className="section skills-section">
          <Skills />
        </section>

        <section id="services" className="section services-section">
          <Services />
        </section>

        <section id="testimonials" className="section testimonials-section">
          <Testimonials />
        </section>

        <section id="contact" className="section contact-section">
          <Contact />
        </section>
      </main>

      <Footer />

      {/* Floating login panel when not signed in */}
      {!user && (
        <div className="login-fab">
          <Login onLogin={handleLogin} />
        </div>
      )}

      {/* Debug panel to help inspect theme/overlay state */}
      <DebugPanel />
    </div>
  );
}

export default App;
