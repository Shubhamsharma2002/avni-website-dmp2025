import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Homepage from './Pages/Home.jsx';
import Demo from './Pages/Demo.jsx';
import Features from './Pages/Features.jsx';
import About from './Pages/About.jsx';
import Pricing from './Pages/Pricing.jsx';

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Homepage />} />
      <Route path='demo' element={<Demo />} />
       <Route path='features' element={<Features />} />
       <Route path='about' element={<About />} /> 
       <Route path='pricing' element={<Pricing />} /> 
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
   
  </StrictMode>,
)
