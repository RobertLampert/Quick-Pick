import { useState } from 'react'
import './App.css'
import ProductCardGrid from './components/ProductCardGrid';

function App() {
  return(
    <main>
      <div className="card-container">
        <header>
          {/* <img src="./PepsiCo_logo.svg" alt="logo" style={{ width: '200px', height: '200px' }}/> */}
          <h1>Soda</h1>
          <ProductCardGrid />
        </header>
      </div>
    </main>
  )
}

export default App
