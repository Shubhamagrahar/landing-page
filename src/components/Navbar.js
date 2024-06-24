import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingBag, faHeart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>GO <span className='heading'>FOOD</span></h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
    <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></a></li>
        <li><a href="#">Groceries <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
    <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></a></li>
        <li><a href="#">Pages <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
    <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></a></li>
      </ul>
      <p className='connect'>Connect with us <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24" height="20">
    <path d="M20 12L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></p>
      <div className="navbar-icons">
        <div className="icon-background">
          <FontAwesomeIcon icon={faSearch} className="icon" />
        </div>
        <div className="icon-background">
          <FontAwesomeIcon icon={faUser} className="icon" />
        </div>
        <div className="icon-background">
          <FontAwesomeIcon icon={faHeart} className="icon" />
        </div>
        <div className="icon-background">
          <FontAwesomeIcon icon={faShoppingBag} className="icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
