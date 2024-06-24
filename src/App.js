import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ProductList />
    </div>
  );
}

export default App;
