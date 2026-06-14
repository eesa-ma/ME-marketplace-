import React from 'react';
import ProductCard from '../components/ProductCard';
import { Heart } from 'lucide-react';

const WishlistScreen = () => {
  const MOCK_WISHLIST = [
    { id: 1, name: "Lunar Glow Serum", category: "Skincare", price: 45, rating: 5 },
    { id: 5, name: "Celestial Eye Cream", category: "Skincare", price: 38, rating: 5 },
  ];

  return (
    <div className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
          <Heart fill="var(--text-primary)" />
          <h1 style={{ marginBottom: 0 }}>My Wishlist</h1>
        </div>
        
        {MOCK_WISHLIST.length > 0 ? (
          <div className="products-grid">
            {MOCK_WISHLIST.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '100px 0' }}>
            <p>Your wishlist is currently empty.</p>
            <a href="/shop" className="view-all">Browse Products</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistScreen;
