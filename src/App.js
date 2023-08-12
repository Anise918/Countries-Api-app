import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import CountryApi from './Components/CountryApi'
import Header from './Components/Header'
import SingleCountry from './Components/SingleCountry'
import Error from './Components/Error'
import './index.css';
import 'tailwindcss/tailwind.css'


function App () {
  
  return (
       <BrowserRouter>
        <Header/>
        <Routes>
       <Route path='CountryApi' element={<CountryApi/>}/>
       
       <Route path='/name:'element={<SingleCountry/>}/>
    
      <Route path='Error' element={<Error/>} />
       
        </Routes>
       
       </BrowserRouter>
      
       

  
  );
}

export default App