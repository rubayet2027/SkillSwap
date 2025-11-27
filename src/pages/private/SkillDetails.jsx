import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaEnvelope, FaTag, FaRegClock } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

export default function SkillDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return setError('No skill id provided');
    setLoading(true);
    fetch('/data/skills.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load skills');
        return res.json();
      })
      .then((data) => {
        const found = (data || []).find((s) => String(s.skillId) === String(id) || String(s.id) === String(id));
        if (!found) throw new Error('Skill not found');
        setSkill(found);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Failed to load skill');
        setLoading(false);
      });
  }, [id]);

  if (!user) {
    // If this page should be private, redirect to login. The app's PrivateRoute may already handle this.
    navigate('/login', { replace: true });
    return null;
  }

  if (loading) return <div className="p-6">Loading skill...</div>;
  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;
  if (!skill) return null;

  const {
    image,
    providerName,
    providerEmail,
    skillName,
    price,
    rating,
    slotsAvailable,
    description,
    category,
  } = skill;

  return (
    <main className="max-w-4xl mx-auto p-6">
      <article className="card bg-base-100 shadow-md overflow-hidden">
        <figure className="h-64 md:h-96 overflow-hidden">
          <img src={image} alt={`${providerName} - ${skillName}`} className="w-full h-full object-cover" />
        </figure>
        <div className="card-body p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">{skillName}</h1>
              <p className="text-sm text-gray-600">by <strong>{providerName}</strong></p>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center gap-2 text-yellow-500">
                <FaStar /> <span className="font-semibold">{rating ?? '—'}</span>
              </div>
              <div className="text-sm text-gray-600">{category}</div>
            </div>
          </div>

          <p className="mt-4 text-gray-700">{description}</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="space-y-2">
              <div className="flex items-center gap-2"><FaEnvelope /> {providerEmail}</div>
              <div className="flex items-center gap-2"><FaTag /> ${price} per session</div>
            </div>
            <div className="space-y-2 text-right">
              <div className="inline-flex items-center gap-2"><span className="px-2 py-1 bg-gray-100 rounded">{slotsAvailable} slots</span></div>
              <div className="inline-flex items-center gap-2"><FaRegClock /> Schedule a session</div>
            </div>
          </div>

          <div className="card-actions mt-6">
            <button className="btn btn-primary">Book Now</button>
            <button className="btn btn-outline" onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>
      </article>
    </main>
  );
}
