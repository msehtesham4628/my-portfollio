import React from 'react';

export default function Hero() {
  return (
    <section className="hero section-hero">
      <div className="hero-inner container">
        <div className="hero-text">
          <h1 className="hero-title">Ehtesham — Full‑Stack Developer</h1>
          <p className="hero-sub">Building robust web apps and delightful user experiences using React, Node.js and modern databases.</p>
          <div className="hero-cta">
            <a className="btn" href="#projects">See projects</a>
            <a className="btn-ghost" href="#contact">Contact me</a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="card-glow">
            <div className="fake-screen">
              <div className="dot-row">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="lines">
                <div className="line" />
                <div className="line short" />
                <div className="line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
