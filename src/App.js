import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="AppBar">
        <h1>Shacia Online Shop</h1>
      </div>
      <div className="Body">
        <div className='Photo'>
          <img src='sepatu1.jpg' alt="Adidas Blue Sprint" />
        </div>
        <div className='Produk'>
          <strong>Adidas Blue Sprint</strong>
          <p>ini adalah sepatu untuk bla bla bla</p>
          <div className='Rating'>
            <span>★★★★☆</span>
            <span>4.0/5.0</span>
          </div>
          <div className='Price'>
            <span>Rp 1.500.000</span>
          </div>
        </div>
        <div className='Beli'>
          <button>Beli</button>
        </div>
        <div className='Reviews'>
          <h3>Customer Reviews</h3>
          <div className='Review'>
            <p><strong>Cia</strong> ★★★★★</p>
            <p>BAgus kak</p>
          </div>
          <div className='Review'>
            <p><strong>Chasoul</strong> ★★★★☆</p>
            <p>Kegedean tapi bagus</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
