import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import CountryApi from './Components/CountryApi'
import Header from './Components/Header'
import SingleCountry from './Components/SingleCountry'
import Error from './Components/Error'
import './index.css';
import 'tailwindcss/tailwind.css'


function App() {

  const [lightTheme, setLightTheme] = useState(true)
  function toggleLightTheme() {
    setLightTheme((prevMode) => !prevMode)
  }
  useEffect(() => {

    const body = document.body;
    body.classList.toggle('light-theme', lightTheme);
    body.classList.toggle('dark-theme', !lightTheme);
  }, [lightTheme]);



  return (
    <BrowserRouter>
      <div className={lightTheme ? 'light' : 'dark'}>
        


        <Header lightTheme={lightTheme} toggleLightTheme={toggleLightTheme} />
        <Routes>
          <Route exact path='/' element={<CountryApi lightTheme={lightTheme}/>} />

          <Route exact path='/:name' element={<SingleCountry />} />

          <Route path='Error' element={<Error />} />

        </Routes>
      </div>


    </BrowserRouter>




  );
}

export default App