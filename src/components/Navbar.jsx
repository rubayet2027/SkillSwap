import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="brand">SkillSwap</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </div>
    </header>
  );
}
