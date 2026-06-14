import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, ShieldCheck, Truck, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import BackButton from '../components/BackButton';
import MoonRating from '../components/MoonRating';
import '../styles/ProductDetail.css';

const MOCK_PRODUCTS = [
  { id: 1, name: "Lunar Glow Serum", category: "Skincare", price: 45, oldPrice: 60, rating: 5, discount: 25 },
  { id: 2, name: "Moonlight Mask", category: "Wellness", price: 32, rating: 4 },
  { id: 3, name: "Stardust Exfoliator", category: "Skincare", price: 28, oldPrice: 35, rating: 5, discount: 20 },
  { id: 4, name: "Midnight Recovery Oil", category: "Skincare", price: 55, rating: 4 },
  { id: 5, name: "Celestial Eye Cream", category: "Skincare", price: 38, rating: 5 },
  { id: 6, name: "Eclipse Cleansing Gel", category: "Wellness", price: 22, rating: 4 },
  { id: 7, name: "Nebula Night Cream", category: "Skincare", price: 48, rating: 5 },
  { id: 8, name: "Galaxy Body Butter", category: "Body Care", price: 25, rating: 4 },
];

const ProductDetailScreen = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
  const product = MOCK_PRODUCTS.find(p => p.id === parseInt(id)) || MOCK_PRODUCTS[0];

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="section product-detail-page" style={{ paddingTop: '120px' }}>
      <div className="container">
        <BackButton />
        <div className="detail-grid">
          <div className="detail-images">
            <div className="main-image-placeholder">
              <img src={product.image || "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} alt={product.name} />
            </div>
          </div>
          
          <div className="detail-info">
            <span className="brand-label">La Luna Exclusive</span>
            <h1>{product.name}</h1>
            <MoonRating rating={product.rating} count={1240} />
            <div className="price-tag">
              <span className="current-price">${product.price}</span>
              {product.oldPrice && <span className="old-price" style={{ marginLeft: '15px', textDecoration: 'line-through', color: '#999', fontSize: '1.5rem' }}>${product.oldPrice}</span>}
            </div>
            
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <div className="selectors">
              <div className="selector">
                <label>Size</label>
                <select>
                  <option>30ml</option>
                  <option>50ml</option>
                  <option>100ml</option>
                </select>
              </div>
            </div>
            
            <div className="action-btns">
              <button className="add-to-cart-big" onClick={handleAddToCart}>
                <ShoppingCart size={20} /> Add to Cart
              </button>
              <button className="wishlist-btn"><Heart /></button>
            </div>
            
            <div className="trust-badges">
              <div className="badge-item"><Truck size={20} /> <span>Free Shipping</span></div>
              <div className="badge-item"><ShieldCheck size={20} /> <span>Secure Payment</span></div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="reviews-section" style={{ marginTop: '80px', borderTop: '1px solid var(--border)', paddingTop: '60px' }}>
          <h2 style={{ marginBottom: '40px' }}>Customer Reviews</h2>
          <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} className="review-card" style={{ padding: '30px', background: 'var(--bg-secondary)', borderRadius: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                  <h4 style={{ margin: 0 }}>Customer {i}</h4>
                  <MoonRating rating={4 + Math.random()} />
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div style={{ marginTop: '15px', fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '600' }}>Verified Purchase</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailScreen;
