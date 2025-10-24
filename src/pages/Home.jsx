import React, { useEffect, useState } from 'react';
import HeroSlider from '../components/HeroSlider';
import HowItWorks from '../components/HowItWorks';
import TopRatedProviders from '../components/TopRatedProviders';
import SkillCard from '../components/SkillCard';

export default function Home() {
  const [skills, setSkills] = useState([]);
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
        if (mounted) setSkills(data);
      })
      .catch(err => {
        console.error(err);
        if (mounted) setError(err.message || 'Error');
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => { mounted = false };
  }, []);

  return (
    <main>
      <HeroSlider />
      <section className="skills-list container">
        <h2>Available Skills</h2>
        <div className="grid">
          {loading && <p>Loading skills…</p>}
          {error && <p className="error">{error}</p>}
          {!loading && !error && skills.map(s => (
            <SkillCard key={s.id} skill={s} />
          ))}
        </div>
      </section>

      <HowItWorks />
      <TopRatedProviders />
    </main>
  );
}
