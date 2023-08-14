import React, { useState } from 'react';
import { BsFillMoonFill } from 'react-icons/bs';

const Header = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  function toggleTheme(newTheme) {
    setCurrentTheme(newTheme);
    document.body.classList.toggle('light-theme', newTheme === 'light');
    document.body.classList.toggle('dark-theme', newTheme === 'dark');
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
