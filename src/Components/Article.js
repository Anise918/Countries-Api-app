import React from 'react'
import {Link} from 'react-router-dom'



export default function Article({flags,name,population,capital,region}) {
    console.log('flags:' ,flags)
  return (
    <>
    <Link to={`/${name.common}`}>
    <article>
        <img src={flags[0]} alt={name.common}/>
        <div className='details'>
        <h2>{name.common}</h2>
        <ul className='lists'>
            <li>Population:<span className='span' style={{fontWeight:'300'}}>{population.toLocaleString()}</span></li>
            <li>Capital:<span className='span' style={{fontWeight:'300'}}>{capital}</span></li>
            <li>Region:<span className='span'>{region}</span></li>
        </ul>
        </div>
    </article>
      </Link>
    </>
  )
}
