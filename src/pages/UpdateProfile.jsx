import React, { useState } from 'react';

export default function UpdateProfile() {
  const [name, setName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: wire update
    console.log('update profile', { name });
  };

  return (
    <main className="container update-profile">
      <h2>Update profile</h2>
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input value={name} onChange={e => setName(e.target.value)} />
        </label>
        <button type="submit">Save</button>
      </form>
    </main>
  );
}
