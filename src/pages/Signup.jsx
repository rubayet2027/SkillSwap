import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate, useLocation } from 'react-router';
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Signup() {
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [passwordErrors, setPasswordErrors] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const errors = [];
    if (!/[A-Z]/.test(password)) errors.push('Password must contain at least one uppercase letter.');
    if (!/[a-z]/.test(password)) errors.push('Password must contain at least one lowercase letter.');
    if (password.length < 6) errors.push('Password must be at least 6 characters long.');

    if (errors.length) {
      setPasswordErrors(errors);
      errors.forEach((err) => toast.error(err));
      return;
    }
    setPasswordErrors([]);

    try {
      await createUser(email, password);
      if (updateUserProfile) {
        await updateUserProfile({ displayName: name, photoURL });
      }
      toast.success('Signed up successfully');
      navigate(from, { replace: true });
    } catch (error) {
      console.error('Error during sign up:', error);
      const msg = error?.message || 'Sign up failed';
      toast.error(msg);
    }
  };
  const handleGoogle = async () => {
    try {
      await googleSignIn();
      toast.success('Signed in with Google');
      navigate(from, { replace: true });
    } catch (err) {
      console.error('Google sign-in failed', err);
      toast.error(err?.message || 'Google sign-in failed');
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-3xl items-center justify-center">
        <div className="text-center lg:text-left">
          <h1 className="text-7xl font-bold text-[#10afff]">Sign Up Now!</h1>
          <p className="py-6">
            Access your account to discover new skills, connect with trusted providers, and manage all your services in one place.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={onSubmit}>
            <fieldset className="fieldset">
              <label className="label">Full Name</label>
              <input
                type="text"
                className="input"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label className="label">Photo URL</label>
              <input
                type="url"
                className="input"
                placeholder="https://example.com/me.jpg"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
              />

              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="input pr-10"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-7 top-1/2 -translate-y-1/2 text-lg text-gray-600"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="mt-2 text-sm">
                <p className={/[A-Z]/.test(password) ? 'text-green-600' : 'text-red-500'}>• Must have an uppercase letter</p>
                <p className={/[a-z]/.test(password) ? 'text-green-600' : 'text-red-500'}>• Must have a lowercase letter</p>
                <p className={password.length >= 6 ? 'text-green-600' : 'text-red-500'}>• At least 6 characters</p>
              </div>
              {passwordErrors.length > 0 && (
                <div className="mt-2 text-sm">
                  {passwordErrors.map((err, idx) => (
                    <p key={idx} className="text-red-600">• {err}</p>
                  ))}
                </div>
              )}
              <button type="submit" className="btn bg-[#2d9ff1] text-white mt-4">Sign Up</button>
              <button type="button" onClick={handleGoogle} className="btn bg-[#2d9ff1] text-white mt-4"><FaGoogle />Sign up with Google</button>
          <p className='text-sm text-center'>Already have an account? <Link to="/login" className="link link-hover font-bold text-[#10afff]" >Login here</Link></p>
            </fieldset>
          </form>
          <ToastContainer position="top-right" autoClose={4000} />
        </div>
      </div>
    </div>
  );
}
