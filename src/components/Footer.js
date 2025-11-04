import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <small>© {year} Ehtesham — Built with React</small>
      </div>
    </footer>
  );
}
