import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'


const API = import.meta.env.API

const getAll = () => {
    const request = axios.get(`${baseUrl}/all`)
    return request.then(response => response.data)
}

const getOne = (country) => {
    const request = axios.get(`${baseUrl}/name/${country}`)
    return request.then(response => response.data)
} 

const getWeather = (country) => {
    
    const weather = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API}`)

    return weather.then(response => response.data.main.temp - 273)
}



export default {getAll, getOne, getWeather}