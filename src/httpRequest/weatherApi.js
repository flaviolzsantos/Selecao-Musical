import axios from 'axios';
import dotenv from 'dotenv'
import { Cache } from '../cache/cache.js';
dotenv.config()

const cache = new Cache(process.env.CACHE_VALUE_MILISECOUNDS);

export default async function getWeatherData(city){
  
  const {WEATHER_URL, WEATHER_API_KEY} = process.env;
  const cacheKey = `weather-${city}`;
  console.log(cache.isCacheOn)

  if(cache.isCacheOn){
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
      return cachedData; 
    }
  }


  const url = `${WEATHER_URL}?fields=only_results,temp,city_name&key=${WEATHER_API_KEY}&city_name=${city}`;
  
  try {
    const response = await axios.get(url);    

    if(cache.isCacheOn){
      cache.set(cacheKey, response.data);
    }
    
    return response.data;
  } catch (error) {
    throw new Error('City not found or error fetching weather data');
  }
};