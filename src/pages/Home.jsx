import React, { useEffect, useState } from 'react';
import HeroSlider from '../components/HeroSlider';
import HowItWorks from '../components/HowItWorks';
import TopRatedProviders from '../components/TopRatedProviders';
import AOS from "aos";
import "aos/dist/aos.css";
import AvailabelSkills from '../components/AvailabelSkills';
import Reviews from '../components/Reviews';



export default function Home() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    AOS.init();
  }, []);

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
        //console.error(err);
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
      <AvailabelSkills skills={skills} loading={loading} error={error} />
      <HowItWorks />
      <TopRatedProviders skills={skills} loading={loading} error={error}/>
      <Reviews />
    </main>
  );
}
