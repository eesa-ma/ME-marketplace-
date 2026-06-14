import React from 'react';
import '../styles/HomeScreen.css';

const AboutScreen = () => {
  return (
    <div className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="about-hero" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>Our Lunar Story</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            Born from a desire to merge ancient wellness rituals with modern science, La Luna brings you products that are as pure as moonlight.
          </p>
        </div>
        
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div className="about-img" style={{ height: '500px', background: 'var(--bg-secondary)', borderRadius: '20px' }}>
             <img src="https://images.unsplash.com/photo-1556228448-59695627c558?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="About" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
          </div>
          <div className="about-text">
            <h2>Purity in Every Drop</h2>
            <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
