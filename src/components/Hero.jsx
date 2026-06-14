import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">Elevate Your Glow with <span className="accent-text">La Luna</span></h1>
          <p className="hero-subtitle">Premium skincare and wellness essentials delivered straight to your door. Experience the magic of the moon in your daily routine.</p>
          <div className="hero-btns">
            <Link to="/shop" className="primary-btn">Shop Now</Link>
            <Link to="/about" className="secondary-btn">Learn More</Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="placeholder-image">
            <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Hero Placeholder" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
