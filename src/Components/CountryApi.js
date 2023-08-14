import React,{useState, useEffect} from 'react'
import Article from './Article'

   const CountryApi = ()=> {
      
  const[countries,setCountries] = useState([])
  const[isLoading, setIsLoading] = useState(false)
  const[isError, setIsError] =useState(false)
  const[searchText, setSearchText] =useState('')
  const regions=[

  
    {
      name: 'Europe',
    },
    {
      name: 'Asia',
    },
    {
      name: 'Africa',
    },
    {
      name: 'America',
    },
    {
      name: 'Oceania',
    },
    
   ];
  
  
  
  useEffect(() => {
    setIsLoading(true)
    fetch('https://restcountries.com/v3/all') 
    .then(response =>response.json())
    .then(data =>{
      setCountries(data)
      setIsLoading(false)
      
      
    })
    .catch(err => {
      setIsError(true)

    }
      )
      

  },[]
  )

  async function filterByRegion(region){try{
    const res= await fetch(`https://restcountries.com/v3/region/${region}`)
    const data =await res.json()
    setCountries(data)
} catch(error){
    
}


  }
  async function searchCountry(){
    try{
        const res= await fetch(`https://restcountries.com/v3/name/${searchText}`)
        const data =await res.json()
        setCountries(data)
    } catch(error){
        
    }
}

  function handleSearchCountry(e) {
    e.preventDefault()
    searchCountry()
}
function handleFilterByRegion(e){
  e.preventDefault();
  filterByRegion()
}


  return (
    <> 
    {
      isLoading &&<h1 className='text-gray-800 font-bold uppercase trackin-wide flex items-center justify-center dark: text-white'>Loading.....</h1>
     }
     {
      isError &&<h1 >Error Occurred</h1>
     }
     
     <div className= 'filter-form'>
      <form  onSubmit={handleSearchCountry}>
      <input className= 'form'
        type='search'
        name='search'
        id='search'
        value ={searchText}
        onChange={(e) =>setSearchText(e.target.value)}
        placeholder='search for a country' required/>
        

      </form>
      
      <form className='filter.region' onSubmit={handleFilterByRegion}>
      
          <select
            name='select'
            id='select'
            value={regions.name}
            onChange={(e) =>filterByRegion(e.target.value)}
            className='select'>
            <option value='filter by region'>Filter By Region</option>
            <option value='africa'>Africa</option>
            <option value='america'>America</option>
            <option value='asia'>Asia</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
          </select>
        
        </form>

     </div>
     <section className='grid-container' >
     {
      countries.map((country) => (
        
        <Article key ={country.name.common}{...country}/>
        
          
      )
      )
     }
     </section>


    </>
  )
}
export default CountryApi