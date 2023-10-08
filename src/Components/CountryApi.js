import React,{useState, useEffect} from 'react'
import Article from './Article'

   const CountryApi = (props)=> {
      
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
     
     <div className= 'filter-form flex flex-col gap 4 md:flex-row md:items-center md: justify-between '>
     <form  className={`max-w-4xl w-full md:flex-2 ${props.lightTheme ? 'light' : ''}`} onSubmit={handleSearchCountry}>

      <input style ={{background:'transparent',}}className= 'form py-3 px-4 w-full align-start lg:w-80'
        type='search'
        name='search'
        id='search'
        value ={searchText}
        onChange={(e) =>setSearchText(e.target.value)}
        placeholder='search for a country' required/>
        

      </form>
      
      <form style={{border:'black',}} className='filter.region mt-8 mb-3 font-bold w-full lg:ml-80 lg:w-80 dark:gray-900' onSubmit={handleFilterByRegion}>
  <select
    name='select'
    id='select'
    value={regions.name}
    onChange={(e) => filterByRegion(e.target.value)}
    className='select'
    style={{background:'transparent', }}
  >
    <option value='filter by region '>Filter By Region</option>
    <option  value='africa'>Africa</option>
    <option value='america'>America</option>
    <option value='asia'>Asia</option>
    <option value='europe'>Europe</option>
    <option value='oceania'>Oceania</option>
  </select>
</form>




     </div>
     <section className='grid-container mx-auto ' >
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