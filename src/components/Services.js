import React from 'react';

const SERVICES = [
  {title: 'Frontend Development', desc: 'Modern, responsive UI built with React and accessible patterns.'},
  {title: 'Backend & APIs', desc: 'Node.js/Express APIs, authentication, and REST/GraphQL endpoints.'},
  {title: 'Database Design', desc: 'Schema design and data modelling with PostgreSQL and MongoDB.'}
];

export default function Services(){
  return (
    <div className="services container">
      <h3>Services</h3>
      <div className="services-grid">
        {SERVICES.map(s => (
          <article key={s.title} className="service-card animated-pop">
            <h4>{s.title}</h4>
            <p className="muted">{s.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
