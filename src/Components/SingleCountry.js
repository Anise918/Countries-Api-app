import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
      <section className='p-8 md:py-0 max-w-7xl mx-auto' >
        {country.map((item) => (
          <div key={item.population} className='grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center md:h-screen'>
            <article>
              {item.flags && item.flags[0] && (
                <img src={item.flags[0]} alt={item.name.common} />
              )}
            </article>
            <article>
              <h1 className='font-bold text-white-900 text-4xl mb-8 lg:text-6xl'>{item.name?.official}</h1>
              <ul className='lists my-4 flex flex-col items-start justify-start gap-2 text-white-700 '>
                <li>Capital:{item.capital}</li>
                <li>Region:{item.region}</li>
                <li>Population:{item.population.toLocaleString()}</li>
              </ul>
              {item.borders &&(
                <>
                <h3>Borders</h3>
                 <ul className='flex flex-wrap items-start justify-start gap-2'>
                {item.borders.map((border,index)=> (
                  <li key={index}className='light:bg-white p-2 text-gray rounded text-xs tracking-wide shadow dark:bg-gray-900 dark:text-gray-400' >{border}</li>
                )
                )}
              </ul>
                </>
              )}
              <Link to='/' className='inline-block mt-8 bg-white py-2 px-6 rounded shadow text-gray-700 hover:bg-gray-200 transition-all duration-200 dark:bg-gray-800'>&larr;Back</Link>
            </article>
          </div>
        ))}
      </section>
    </>
  );
}
