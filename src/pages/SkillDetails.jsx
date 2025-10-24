import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function SkillDetails() {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetch('/data/skills.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load skills');
        return res.json();
      })
      .then(data => {
        if (!mounted) return;
        const found = data.find(s => String(s.id) === String(id));
        setSkill(found || null);
      })
      .catch(err => {
        console.error(err);
        if (mounted) setError(err.message || 'Error');
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => { mounted = false };
  }, [id]);

  if (loading) return <main className="container"><p>Loading…</p></main>;
  if (error) return <main className="container"><p className="error">{error}</p></main>;
  if (!skill) return <main className="container"><h2>Skill not found</h2></main>;

  return (
    <main className="container skill-details">
      <h2>{skill.title}</h2>
      <p>{skill.description}</p>
      <p><strong>Provider:</strong> {skill.provider}</p>
      <p><strong>Price:</strong> ${skill.price}</p>
    </main>
  );
}
