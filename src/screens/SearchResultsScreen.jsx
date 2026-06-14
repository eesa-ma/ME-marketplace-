import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import BackButton from '../components/BackButton';

const MOCK_PRODUCTS = [
  { id: 1, name: "Lunar Glow Serum", category: "Skincare", price: 45, rating: 5 },
  { id: 4, name: "Midnight Recovery Oil", category: "Skincare", price: 55, rating: 4 },
];

const SearchResultsScreen = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  return (
    <div className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <BackButton />
        <h1 className="section-title">Search Results for "{query}"</h1>
        <p style={{ marginBottom: '40px', color: 'var(--text-secondary)' }}>Showing {MOCK_PRODUCTS.length} products found for your search.</p>
        
        <div className="products-grid">
          {MOCK_PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsScreen;
