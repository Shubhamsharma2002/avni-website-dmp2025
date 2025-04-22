import React from 'react'

import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'

const App = () =>{
  return (
    <>
     <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow p-4">
         <Outlet/>
        {/* Add your <Routes> here if needed */}
      </main>

      <Footer />
    </div>
    
    </>
  ) 
}

export default App
