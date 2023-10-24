import React from 'react';
import { BsFillMoonFill } from 'react-icons/bs';

const Header = (props) => {
  /*const [currentTheme, setCurrentTheme] = useState('light');
   useEffect(()=>{
    const header= document.querySelector('.header')
    header.classList.add(currentTheme==='light'? 'light-theme': 'dark-theme')
      }
      ,[currentTheme]);*/



 /* function toggleTheme(newTheme) {
    setCurrentTheme(newTheme);
    document.body.classList.toggle('light-theme', newTheme === 'light');
    document.body.classList.toggle('dark-theme', newTheme === 'dark');

    const header=document.querySelector('.header');
    header.classList.toggle('light-theme', newTheme === 'light');
    header.classList.toggle('dark-theme', newTheme === 'dark'); 
  }*/
  
  return (
    <header className={'header rounded-lg shadow-xl '  + (props.lightTheme ? 'light' : '')}>

      <div>
        <h1 className='font-bold'>Where in the world?</h1>
      </div>
      <div className='icon'>
        <BsFillMoonFill onClick={props.toggleLightTheme} />
      </div>
    </header>
  );
};

export default Header;
