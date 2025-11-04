import React from 'react';

const TESTIMONIALS = [
  {id:1, name:'A. Smith', text:'Ehtesham delivered a clean, fast UI and thoughtful API design — great communication.'},
  {id:2, name:'J. Doe', text:'Fast turnaround, reliable backend work and clear documentation.'},
  {id:3, name:'M. Lee', text:'Exceeded expectations on performance tuning and DB migrations.'}
];

export default function Testimonials(){
  return (
    <div className="testimonials container">
      <h3>What people say</h3>
      <div className="testimonials-grid">
        {TESTIMONIALS.map(t => (
          <blockquote className="testimonial-card" key={t.id}>
            <p>“{t.text}”</p>
            <footer className="muted">— {t.name}</footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
