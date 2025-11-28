import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login() {
  const navigate = useNavigate();
  const { signIn, googleSignIn } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (signIn) {
        await signIn(email, password);
        toast.success('Signed in successfully');
        navigate(from, { replace: true });
      } else {
        console.warn('signIn not available');
      }
    } catch (err) {
      console.error('Sign in failed', err);
      toast.error(err?.message || 'Sign in failed');
    }
  };

  const handleGoogle = async () => {
    try {
      if (googleSignIn) {
        await googleSignIn();
        toast.success('Signed in with Google');
        navigate(from, { replace: true });
      } else {
        console.warn('googleSignIn not available');
      }
    } catch (err) {
      console.error('Google sign-in failed', err);
      toast.error(err?.message || 'Google sign-in failed');
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className=" hero-content flex-col lg:flex-row-reverse max-w-3xl items-center justify-center">
        <div className="text-center lg:text-left">
          <h1 className="text-7xl font-bold text-[#10afff]">Sign In Now!</h1>
          <p className="py-6">
            Log in to continue your journey. Connect, learn, and grow with a community built for skill-sharing and opportunities.
          </p>

        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={onSubmit}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="input" placeholder="Email" required />
              <label className="label">Password</label>
              <div className="relative">
                <input
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  type={showPassword ? 'text' : 'password'}
                  className="input pr-10"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(s => !s)}
                  className="absolute right-7 top-1/2 -translate-y-1/2 text-lg text-gray-600"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div><Link to="/forgot-password" className="link link-hover">Forgot password?</Link></div>
              <button type="submit" className="btn bg-[#2d9ff1] text-white mt-4">Sign In</button>
              <button type="button" onClick={handleGoogle} className="btn mt-4 bg-[#2d9ff1] text-white"><FaGoogle />Sign in with Google</button>
              <p className='text-sm text-center'>Don't have an account? <Link to="/signup" className="link link-hover font-bold text-[#10afff]" >Sign up here</Link></p>
            </fieldset>
          </form>
          <ToastContainer position="top-right" autoClose={4000} />
        </div>
      </div>
    </div>
  );
}
