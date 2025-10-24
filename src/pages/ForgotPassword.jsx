import React, { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: send reset link
    console.log('send reset for', email);
  };

  return (
    <main className="container forgot-password">
      <h2>Reset password</h2>
      <form onSubmit={onSubmit}>
        <label>
          Email
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <button type="submit">Send reset link</button>
      </form>
    </main>
  );
}
