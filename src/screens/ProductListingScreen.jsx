import React from 'react';
import ProductCard from '../components/ProductCard';
import BackButton from '../components/BackButton';
import '../styles/HomeScreen.css'; // Reusing grid styles

const MOCK_PRODUCTS = [
  { id: 1, name: "Lunar Glow Serum", category: "Skincare", price: 45, rating: 5 },
  { id: 2, name: "Moonlight Mask", category: "Wellness", price: 32, rating: 4 },
  { id: 3, name: "Stardust Exfoliator", category: "Skincare", price: 28, rating: 5 },
  // ... more mock products
];

const ProductListingScreen = () => {
  return (
    <div className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <BackButton />
        <h2 className="section-title">All Products</h2>
        <div className="products-grid">
          {MOCK_PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          {[...Array(5)].map((_, i) => (
            <div key={i} className="placeholder-card" style={{ height: '400px', border: '1px dashed #ccc', borderRadius: '12px' }}>
              <p style={{ padding: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder product.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListingScreen;
