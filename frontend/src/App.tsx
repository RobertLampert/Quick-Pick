import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard.tsx'


function App() {
  return(
    <main>
      <div className="card-container">
        <header>
          {/* <img src="./PepsiCo_logo.svg" alt="logo" style={{ width: '200px', height: '200px' }}/> */}
          <ProductCard title="Pepsi 12 Pack" image='./Pepsi12.jpg'/>   
          <ProductCard title="Pepsi Zero Sugar 12 Pack" />
          <ProductCard title="Pepsi Diet 12 Pack" />
        </header>
      </div>
    </main>
  )
}

export default App
