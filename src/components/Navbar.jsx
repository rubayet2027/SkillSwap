import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const avatarSrc = user?.photoURL || user?.avatar || user?.providerData?.[0]?.photoURL || <CgProfile />;
  const displayName = user?.displayName || user?.email;

  return (
    <div className="navbar bg-[#0A1931] shadow-sm px-4">
      <div className="container mx-auto relative flex justify-between items-center max-w-[1400px]">
        <div className="flex justify-between items-center flex-1">
          <Link to="/" className="text-xl">
            <img src="/vite.svg" alt="SkillSwap" className="inline-block w-8 h-8 mr-2" />
            <span className="text-white font-bold">SkillSwap</span>
          </Link>
        </div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2">
          {
            user &&
            <NavLink
              to="/"
              className={({ isActive }) =>
                `mx-3 text-sm text-white border-b-2 ${isActive ? 'border-white' : 'border-transparent'} hover:border-white`
              }
            >
              Home
            </NavLink>
          }
        </div>

        <div className="flex gap-2 items-center">
          {!user && (
            <div className="flex gap-2">
              <Link to="/login" className="btn btn-sm">Sign In</Link>
              <Link to="/signup" className="btn btn-primary btn-sm bg-[#10afff] text-white">Sign Up</Link>
            </div>
          )}

          {user && (
            <div>
              <Link to="/profile" title={displayName} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt={displayName} src={avatarSrc} />
                </div>
              </Link>
            </div>
          )}
          {user && (
            <button onClick={handleLogout} className="btn btn-primary btn-sm bg-[#10afff] text-white">Logout</button>
          )}
        </div>
      </div>
    </div>
  );
}
