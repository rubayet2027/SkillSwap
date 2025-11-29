import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaStar, FaEnvelope, FaTag, FaRegClock } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { toast, ToastContainer } from 'react-toastify';

export default function SkillDetails() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { id } = useParams();
  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bookingData, setBookingData] = useState({
    name: user?.displayName || '',
    email: user?.email || '',
    datetime: '',
    phone: '',
    notes: '',
  });

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingData((p) => ({ ...p, [name]: value }));
  };

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
    navigate('/login', { replace: true });
    return null;
  }

  if (loading) return <div className='flex items-center justify-center max-w-full max-h-screen'><span className="loading loading-spinner text-info"></span></div>;
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
            <button className="btn btn-outline" onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>
      </article>

        <section className="mt-8 p-6 bg-base-200 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Book a session</h2>
          <ToastContainer position="top-right" autoClose={4000} />
        <form onSubmit={(e) => {
          e.preventDefault();
          if (!bookingData.name.trim()) return toast.error('Please enter your name');
          if (!bookingData.email.trim()) return toast.error('Please enter your email');
          if (!bookingData.datetime) return toast.error('Please choose a date and time');

          // const booking = {
          //   skillId: id,
          //   skillName,
          //   providerName,
          //   ...bookingData,
          // };
           //console.log('Booking submitted:', booking);
          toast.success('Booking confirmed — check your email');

          setBookingData({ name: user?.displayName || '', email: user?.email || '', datetime: '', phone: '', notes: '' });
        }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">Name</label>
              <input name="name" value={bookingData.name} onChange={handleBookingChange} type="text" className="input w-full" placeholder="Your full name" required />
            </div>
            <div>
              <label className="label">Email</label>
              <input name="email" value={bookingData.email} onChange={handleBookingChange} type="email" className="input w-full" placeholder="Email" required />
            </div>
            <div>
              <label className="label">Phone</label>
              <input name="phone" value={bookingData.phone} onChange={handleBookingChange} type="tel" className="input w-full" placeholder="Phone (optional)" />
            </div>
            <div>
              <label className="label">Preferred Date & Time</label>
              <input name="datetime" value={bookingData.datetime} onChange={handleBookingChange} type="datetime-local" className="input w-full" required />
            </div>
            <div className="md:col-span-2">
              <label className="label">Notes</label>
              <textarea name="notes" value={bookingData.notes} onChange={handleBookingChange} className="textarea w-full" placeholder="Any details for the provider (optional)" />
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-3">
            <button type="button" className="btn" onClick={() => setBookingData({ name: user?.displayName || '', email: user?.email || '', datetime: '', phone: '', notes: '' })}>Clear</button>
            <button type="submit" className="btn bg-[#10afff] text-white">Book</button>
          </div>
        </form>
      </section>

    </main>
  );
}
