import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: wire login
    console.log('login', { email, password });
  };

  return (
    <main className="container auth-page">
      <h2>Login</h2>
      <form onSubmit={onSubmit} className="auth-form">
        <label>
          Email
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
