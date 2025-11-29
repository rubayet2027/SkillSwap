import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { toast, ToastContainer } from 'react-toastify';

export default function ForgotPassword() {
  const { forgetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return toast.error('Please enter your email');
    setLoading(true);
    try {
      await forgetPassword(email.trim());
      toast.success('Password reset email sent. Check your inbox.');
      setEmail('');
    } catch (err) {
      console.error('reset error', err);
      toast.error(err?.message || 'Failed to send reset email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Reset Password</h1>
          <p className="py-4">Enter your account email and we'll send you a link to reset your password.</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <label className="label">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="input w-full"
                placeholder="you@example.com"
                required
              />
              <div className="mt-4 flex justify-end">
                <button type="submit" className="btn bg-[#2d9ff1] text-white" disabled={loading}>{loading ? 'Sending...' : 'Send reset link'}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={4000} />
    </div>
  );
}
