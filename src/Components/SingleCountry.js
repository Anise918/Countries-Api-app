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
      <section>
        {country.map((item) => (
          <div key={item.population}>
            <article>
              {item.flag?.svg && <img src={item.flag.svg} alt={item.name.common} />}
            </article>
            <article>
              <h1>{item.name?.official}</h1>
            </article>
          </div>
        ))}
      </section>
    </>
  );
}
