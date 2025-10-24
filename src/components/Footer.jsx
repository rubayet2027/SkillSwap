import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} SkillSwap — Connect, learn, and trade skills.</p>
      </div>
    </footer>
  );
}
