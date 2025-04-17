import React from 'react'

import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

const App = () =>{
  return (
    <>
     <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow p-4">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        {/* Add your <Routes> here if needed */}
      </main>

      <Footer />
    </div>
    
    </>
  ) 
}

export default App
