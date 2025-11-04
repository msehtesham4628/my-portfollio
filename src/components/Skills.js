import React from 'react';

const SKILLS = [
  'React', 'JavaScript', 'TypeScript', 'Node.js', 'Express',
  'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL', 'Docker'
];

export default function Skills() {
  return (
    <div className="skills container">
      <h3>Skills & Technologies</h3>
      <p className="muted">A concise snapshot of tools I use to build real-world apps.</p>
      <div className="skills-grid">
        {SKILLS.map(s => (
          <span key={s} className="skill-pill">{s}</span>
        ))}
      </div>
    </div>
  );
}
