import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function UpdateProfile() {
  const { user, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || '');
      setPhotoURL(user.photoURL || '');
    }
  }, [user]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!displayName.trim()) return toast.error('Please enter a display name');
    setSubmitting(true);
    try {
      await updateUserProfile({ displayName: displayName.trim(), photoURL: photoURL.trim() || null });
      toast.success('Profile updated');
      navigate('/profile');
    } catch (err) {
      //console.error('update profile error', err);
      toast.error(err?.message || 'Failed to update profile');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="text-2xl font-semibold mb-4">Update profile</h2>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="label">Display name</label>
              <input
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="input w-full"
                placeholder="Full name"
                required
              />
            </div>

            <div>
              <label className="label">Photo URL</label>
              <input
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="input w-full"
                placeholder="Provide an image URL"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  {photoURL ? (
                    <img src={photoURL} alt="profile preview" />
                  ) : (
                    <div className="flex items-center justify-center bg-gray-200 w-24 h-24 text-2xl font-semibold text-gray-700">{(displayName || 'U').split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
                  )}
                </div>
              </div>

              <div className="ml-auto flex items-center gap-2">
                <button type="button" className="btn" onClick={() => navigate('/profile')}>Back</button>
                <button type="submit" className="btn bg-[#2d9ff1] text-white" disabled={submitting}>{submitting ? 'Saving...' : 'Save changes'}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
