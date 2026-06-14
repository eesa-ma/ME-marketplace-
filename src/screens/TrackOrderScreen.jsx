import React, { useState } from 'react';
import { Package, Search, ArrowRight } from 'lucide-react';
import BackButton from '../components/BackButton';
import '../styles/Auth.css';

const TrackOrderScreen = () => {
  const [orderId, setOrderId] = useState('');

  const handleTrack = (e) => {
    e.preventDefault();
    alert(`Tracking search for: ${orderId}. In a real app, this would query the backend/shipping API.`);
  };

  return (
    <div className="section" style={{ paddingTop: '150px' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <BackButton />
        <div className="auth-card" style={{ maxWidth: '600px' }}>
          <Package size={48} color="var(--accent)" style={{ marginBottom: '20px' }} />
          <h2>Track Your Order</h2>
          <p style={{ marginBottom: '40px' }}>Enter your order ID or tracking number to see exactly where your glow is.</p>
          
          <form onSubmit={handleTrack}>
            <div className="input-group">
              <Search size={18} />
              <input 
                type="text" 
                placeholder="Order ID (e.g. LL-1234)" 
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                required 
              />
            </div>
            
            <button type="submit" className="auth-btn">
              Track Status <ArrowRight size={18} />
            </button>
          </form>
          
          <div style={{ marginTop: '30px', padding: '20px', background: 'var(--bg-secondary)', borderRadius: '8px', fontSize: '0.9rem', textAlign: 'left' }}>
            <h4 style={{ marginBottom: '10px' }}>Where do I find my Order ID?</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Check your confirmation email or log in to your account dashboard under "My Orders."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrderScreen;
