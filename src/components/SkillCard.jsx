import React from 'react';
import { Link } from 'react-router-dom';

export default function SkillCard({ skill }) {
  if (!skill) return null;
  return (
    <article className="skill-card">
      <img src={skill.image || '/placeholder.png'} alt={skill.title} />
      <div className="skill-card-body">
        <h3>{skill.title}</h3>
        <p>{skill.short || skill.description}</p>
        <div className="meta">
          <span>By {skill.provider}</span>
          <span>• ${skill.price ?? '—'}</span>
        </div>
        <Link to={`/skill/${skill.id}`} className="btn">View</Link>
      </div>
    </article>
  );
}
