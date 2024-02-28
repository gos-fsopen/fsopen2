

const Display = ({ countriesToDisplay, currentCountry, setCurrentCountry, setCountriesToDisplay, weatherData}) => {


    

    const handleShow = (country) => {
        setCurrentCountry(country)
        setCountriesToDisplay([country])
    }
    if (countriesToDisplay.length > 10) {
        return (
            <div>Too many countries, add more filters</div>
        )
    }
    if (currentCountry !== '' && countriesToDisplay.length === 1){
        return (
            <>
            <h1>{currentCountry.name.official}</h1>
            <h3>Languages</h3>
            <ul >
                {JSON.stringify(currentCountry.languages)}
            </ul>
            <h3>flag</h3>
            {console.log(typeof(currentCountry.flag))}
                <div id='flag'>{currentCountry.flag}</div>

            <h4>current weather in {currentCountry.capital[0]} is: {weatherData}</h4>
            </>
        )
    }
    else{
    return (
        <>
            <ul>
                {countriesToDisplay.map(country =>
                    <li key={country.name.official}>
                        {country.name.common}
                        <button onClick={() => handleShow(country)}>show</button>
                    </li>)}
                
            </ul>
        </>
    )
                }
}

export default Display