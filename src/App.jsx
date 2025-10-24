import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from "./components/ProductList";
function App() {
 

  return (
    <div className="min-h-screen bg-gray-100">
    <ProductList />
  </div>
  )
}

export default App
