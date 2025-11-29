import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

export default function Profile() {
  const { user } = useAuth();

  if (!user) return null;

  const displayName = user.displayName || 'Unnamed User';
  const email = user.email;
  const providerPhoto = (user.providerData || []).find(p => p && (p.providerId === 'google.com' || (p.providerId || '').includes('google')))?.photoURL;
  const photo = user.photoURL || providerPhoto || '';
 
  //console.log('User Profile:', { displayName, email, photo });
  return (
    <main className="max-w-4xl mx-auto p-6 flex-1">
      <div className="card bg-base-100 shadow-md overflow-hidden">
        <div className="card-body">
          <div className="flex flex-col items-center gap-6">
            <div className="avatar">
              <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={photo} alt={displayName} />
              </div>
            </div>

            <div className="flex-1">
              <h1 className="text-2xl font-bold">{displayName}</h1>
              <p className="text-sm text-gray-600">{email}</p>
            </div>

            <div>
              <Link to="/update-profile" className="btn bg-[#2d9ff1] text-white">Update Profile</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
