import React from 'react';
import ProductCard from '../components/ProductCard';
import BackButton from '../components/BackButton';
import { Trophy } from 'lucide-react';

const MOCK_PRODUCTS = [
  { id: 1, name: "Lunar Glow Serum", category: "Skincare", price: 45, oldPrice: 60, rating: 5, discount: 25 },
  { id: 3, name: "Stardust Exfoliator", category: "Skincare", price: 28, oldPrice: 35, rating: 5, discount: 20 },
  { id: 5, name: "Celestial Eye Cream", category: "Skincare", price: 38, rating: 5 },
  { id: 7, name: "Nebula Night Cream", category: "Skincare", price: 48, rating: 5 },
];

const BestSellersScreen = () => {
  return (
    <div className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <BackButton />
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Trophy size={48} color="var(--accent)" style={{ marginBottom: '20px' }} />
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Best Sellers</h1>
          <p style={{ color: 'var(--text-secondary)' }}>The products our community can't get enough of.</p>
        </div>
        
        <div className="products-grid">
          {MOCK_PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellersScreen;
