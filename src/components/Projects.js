import React from 'react';

const SAMPLE_PROJECTS = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Personal site built with React. Responsive layout, accessible components.',
    url: '#'
  },
  {
    id: 2,
    title: 'E-commerce UI',
    description: 'A product listing and cart UI with clean interactions.',
    url: '#'
  },
  {
    id: 3,
    title: 'Blog Template',
    description: 'Markdown-driven blog template with tidy typography.',
    url: '#'
  }
];

export default function Projects() {
  return (
    <div className="projects container">
      <h3>Selected Projects</h3>
      <div className="projects-grid">
        {SAMPLE_PROJECTS.map(p => (
          <article key={p.id} className="project-card">
            <div className="project-thumb" aria-hidden="true">🔷</div>
            <div className="project-body">
              <h4>{p.title}</h4>
              <p>{p.description}</p>
              <a className="btn" href={p.url} target="_blank" rel="noreferrer">View</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
