import React, { useState, useEffect } from 'react';
import { BsFillMoonFill } from 'react-icons/bs';

const Header = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
   useEffect(()=>{
    const header= document.querySelector('.header')
    header.classList.add(currentTheme==='light'? 'light-theme': 'dark-theme')
      }
      ,[currentTheme]);



  function toggleTheme(newTheme) {
    setCurrentTheme(newTheme);
    document.body.classList.toggle('light-theme', newTheme === 'light');
    document.body.classList.toggle('dark-theme', newTheme === 'dark');

    const header=document.querySelector('.header');
    header.classList.toggle('light-theme', newTheme === 'light');
    header.classList.toggle('dark-theme', newTheme === 'dark'); 
  }
  
  return (
    <header className={`header ${currentTheme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <div>
        <h1>Where in the world?</h1>
      </div>
      <div className='icon' onClick={() => toggleTheme(currentTheme === 'light' ? 'dark' : 'light')}>
        <BsFillMoonFill />
      </div>
    </header>
  );
};

export default Header;
