import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function SingleCountry() {
  const [country, setCountry] = useState([])
  const{name} =useParams();

  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3/name/${name}`);
        const data = await res.json();
        console.log(data)
        if (Array.isArray(data)){
          setCountry(data);
        }else {
          setCountry([])
        }
        
      } catch (error) {
        console.error('Error fetching country:', error);
        setCountry([]); 
      }
    };
    getSingleCountry();
  }, [name]);

  return (
    <>
      <section className='p-8 md:py-0' >
        {country.map((item) => (
          <div key={item.population} className='grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center md:h-screen'>
            <article>
              {item.flags && item.flags[0] && (
                <img src={item.flags[0]} alt={item.name.common} />
              )}
            </article>
            <article>
              <h1 className='font-bold text-white-900 text-4xl lg:text-6xl'>{item.name?.official}</h1>
              <ul className='lists'>
                <li>Capital:{item.capital}</li>
                <li>Region:{item.region}</li>
                <li>Population:{item.population.toLocaleString()}</li>
              </ul>
            </article>
          </div>
        ))}
      </section>
    </>
  );
}
