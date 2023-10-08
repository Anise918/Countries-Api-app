import React from 'react'
import {Link} from 'react-router-dom'



export default function Article({flags,name,population,capital,region,}) {
    console.log('flags:' ,flags)
  return (
    <>
    <Link to={`/${name.common}`}>
        
    <article className='country-card  light:bg-white rounded-lg shadow overflow-hidden dark:bg-gray-900 transition-all'>
        <img src={flags[0]} alt={name.common} className='h-48 md:h-72 w-full object-cover'/>
        <div className='details p-4 '>
        <h2 className='text-lg font-bold light:text-black'>{name.common}</h2>
        <ul className='lists mt-2 text-gray-400'>
            <li>Population:<span className='font-light'>{population.toLocaleString()}</span></li>
            <li>Capital:{capital}</li>
            <li>Region:{region}</li>
            
            </ul>
            </div>
            </article>
      </Link>
    </>
  )
}
