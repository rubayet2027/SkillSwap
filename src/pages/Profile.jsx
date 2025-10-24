import React from 'react';

export default function Profile() {
  // TODO: fetch user/profile from AuthContext
  return (
    <main className="container profile-page">
      <h2>Your profile</h2>
      <p>Name: <strong>Demo User</strong></p>
      <p>Email: <strong>demo@example.com</strong></p>
    </main>
  );
}
