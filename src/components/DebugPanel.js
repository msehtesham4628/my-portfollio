import React, { useEffect, useState } from 'react';

export default function DebugPanel() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ theme: null, pf_theme: null, pf_user: null, afterBg: null });

  useEffect(() => {
    function read() {
      const theme = document.documentElement.getAttribute('data-theme');
      let pf_theme = null;
      let pf_user = null;
      try { pf_theme = localStorage.getItem('pf_theme'); } catch {}
      try { pf_user = localStorage.getItem('pf_user'); } catch {}

      const appEl = document.querySelector('.App');
      let afterBg = null;
      try {
        if (appEl) {
          const cs = window.getComputedStyle(appEl, '::after');
          afterBg = cs.getPropertyValue('background-image') || cs.backgroundImage || null;
        }
      } catch (e) {
        afterBg = `error: ${e.message}`;
      }

      setData({ theme, pf_theme, pf_user, afterBg });
    }

    read();
    const id = setInterval(read, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`debug-panel ${visible ? 'open' : ''}`}>
      <button className="debug-toggle" onClick={() => setVisible(v => !v)} aria-expanded={visible}>
        {visible ? 'Hide debug' : 'Show debug'}
      </button>

      {visible && (
        <div className="debug-body">
          <div><strong>document.data-theme:</strong> {String(data.theme)}</div>
          <div><strong>localStorage.pf_theme:</strong> {String(data.pf_theme)}</div>
          <div><strong>localStorage.pf_user:</strong> {String(data.pf_user)}</div>
          <div style={{wordBreak:'break-all'}}><strong>.App::after bg:</strong> {String(data.afterBg)}</div>
        </div>
      )}
    </div>
  );
}
