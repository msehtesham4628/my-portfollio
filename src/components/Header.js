import React from 'react';

export default function Header({ isLoggedIn, user, onLogoutClick }) {
  return (
    <header className="site-header animated-fade">
      <div className="container header-inner">
        <h2 className="brand">Ehtesham</h2>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          {isLoggedIn ? (
            <div className="user-pill">
              <span className="user-name">{user?.name || 'User'}</span>
              <button className="btn-ghost small" onClick={onLogoutClick}>Logout</button>
            </div>
          ) : (
            <a className="btn" href="#contact">Hire me</a>
          )}
        </div>
      </div>
    </header>
  );
}
