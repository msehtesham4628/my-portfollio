import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function submit(e) {
    e.preventDefault();
    if (!name && !email) return;
    onLogin({ name, email });
  }

  return (
    <form className="login-card animated-pop" onSubmit={submit} aria-label="Login form">
      <h4>Sign in</h4>
      <label>
        Name
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />
      </label>
      <label>
        Email
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
      </label>
      <div className="login-actions">
        <button className="btn" type="submit">Sign in</button>
      </div>
    </form>
  );
}
