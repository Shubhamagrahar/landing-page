import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h4>Discount up to 20%</h4>
        <h2 className='cinzel'>
          <b>Buy Fresh And Organic Grocery Food</b>
          <img src="/fruit.png" alt="Fruits" className="fruit-image"/>
        </h2>
        <p className='shade'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab iste, accusamus quas officiis optio ullam ut laboriosam itaque natus? Atque, similique molestiae? Tempore ullam doloremque fugiat! Odio officia labore corporis?</p>
       
        <div className="stats">
          <button className='cinzel btn'>Shop Now 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#FFFFFF" fill="none">
              <path d="M20 12L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <div className='stats-info'>
            <span className='cinzel num'>35k+ <br /><span className='info'>Users</span></span>
            <span className='cinzel num'>18k+ <br /><span className='info'>Products</span></span>
          </div>
        </div>
      
      </div>
      <img src="/salad.png" alt="Salad" className="header-image"/>
    </header>
  );
};

export default Header;
