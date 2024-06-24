import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css';

const ProductList = () => {
  const [category, setCategory] = useState('Fruits and Vegetables'); // Set default to 'Fruits and Vegetables'
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let categoryAPI = '';

      switch (category) {
        case 'Fruits and Vegetables':
          categoryAPI = 'Vegetarian';
          break;
        case 'Bakery':
          categoryAPI = 'Dessert';
          break;
        case 'Meat and Seafood':
          categoryAPI = 'Seafood';
          break;
        case 'Beverage':
          categoryAPI = 'Ordinary_Drink';
          break;
        case 'Biscuit and Snacks':
          categoryAPI = 'Snack';
          break;
        default:
          categoryAPI = 'Seafood';
          break;
      }

      try {
        const result = await axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryAPI}`);
        if (result.data.meals) {
          setProducts(result.data.meals);
          setError(null);
        } else {
          setProducts([]);
          setError('No products found for this category.');
        }
      } catch (error) {
        setProducts([]);
        setError('An error occurred while fetching data.');
      }
    };
    fetchData();
  }, [category]);

  return (
    <div className="product-list">
      <h3 className='cinzel'>Shop by Category</h3>
      <h1 className='cinzel'>Top Category Of Organic Food</h1>
      <div className="categories">
        {['Fruits and Vegetables', 'Bakery', 'Meat and Seafood', 'Beverage', 'Biscuit and Snacks'].map((cat) => (
          <button 
            key={cat} 
            onClick={() => setCategory(cat)}
            className={category === cat ? 'selected' : ''}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="products">
        {error && <p className="error">{error}</p>}
        {!error && products.map((product) => (
          <div key={product.idMeal} className="product">
            <img src={product.strMealThumb} alt={product.strMeal} className="product-image"/>
            <div className="product-details">
              <div className="product-header">
                <h3 className="product-title">{product.strMeal}</h3>
                <span className="product-price cinzel">$8.45</span>
              </div>
              <hr className="product-separator"/>
              <div className="product-footer">
                <p className="product-description cinzel">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="product-button cinzel">Shop Now <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                  <path d="M20 12L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
