import React from 'react'
import {Link} from 'react-router-dom'



export default function Article({flags,name,population,capital,region}) {
    console.log('flags:' ,flags)
  return (
    <>
    <Link to={`/${name.common}`}>
        
    <article className='country-card  rounded-lg shadow overflow-hidden light:bg-white text-gray hover:bg-gray transition-all'>
        <img src={flags[0]} alt={name.common} className='h-48 md:h-72 w-full object-cover'/>
        <div className='details p-4 light:bg-white '>
        <h2 className='text-lg font-bold'>{name.common}</h2>
        <ul className='lists mt-2'>
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
