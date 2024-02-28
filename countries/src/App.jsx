import { useState, useEffect } from "react"
import countryService from './services/countryService'
import Search from "./components/Search"
import Display from "./components/Display"


const App = () => {
    const [countries, setCountries] = useState([])
    const [currentCountry, setCurrentCountry] = useState(null)
    const [countriesToDisplay, setCountriesToDisplay] = useState([])
    const [weatherData, setWeatherDate] = useState(null)

   

    useEffect(() => {
      

      if (currentCountry){
        console.log(currentCountry.capital[0])
      countryService
      .getWeather(currentCountry.capital[0])
      
      .then(weather => {
        setWeatherDate(weather)
    })
  }
    }, [currentCountry])
 

    const effectHook = () => {
      countryService
      .getAll()
      .then(initialLoad => {
        setCountries(initialLoad)
        setCountriesToDisplay(initialLoad)
      })
    }
    useEffect(effectHook, [])

    return (
      <>
      <div>
        <h1>{countries.length} countries found</h1>
        <Search countries={countries} setCountriesToDisplay={setCountriesToDisplay}
                setCurrentCountry={setCurrentCountry}/>
        <Display countriesToDisplay={countriesToDisplay} 
                 currentCountry={currentCountry}
                 setCurrentCountry={setCurrentCountry}
                 setCountriesToDisplay={setCountriesToDisplay}
                 weatherData={weatherData}/>
      </div>
      </>
    )
}

export default App
