import React from 'react';

const mock = [
  { id: 1, name: 'Alex Johnson', skill: 'Guitar', rating: 4.9 },
  { id: 2, name: 'Priya Singh', skill: 'UI Design', rating: 4.8 },
  { id: 3, name: 'Sam Lee', skill: 'JavaScript', rating: 4.7 }
];

export default function TopRatedProviders({ providers = mock }) {
  return (
    <aside className="top-providers">
      <h3>Top rated providers</h3>
      <ul>
        {providers.map(p => (
          <li key={p.id}>{p.name} — {p.skill} ({p.rating})</li>
        ))}
      </ul>
    </aside>
  );
}
