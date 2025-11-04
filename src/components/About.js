import React from 'react';

export default function About({ isFullStack }) {
  return (
    <div className="about container animated-slideUp">
      <h3>Hi — I'm Ehtesham</h3>
      <p>
        I'm a full-stack developer with strong experience building scalable web
        applications. I work across the stack: React front-ends, Node.js/Express back-ends,
        and relational/non-relational databases (Postgres, MongoDB).
      </p>
      <p>
        I care about performance, accessibility, and clean engineering. This
        portfolio highlights selected projects that demonstrate UI, API, and
        database work.
      </p>
      {isFullStack && (
        <p className="muted">Skills: React · Node.js · Express · PostgreSQL · MongoDB · REST · GraphQL</p>
      )}
    </div>
  );
}
