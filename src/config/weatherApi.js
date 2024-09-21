import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config()

export default async function getWeatherData(city){

  const {WEATHER_URL, WEATHER_API_KEY} = process.env;
  const url = `${WEATHER_URL}?fields=only_results,temp,city_name&key=${WEATHER_API_KEY}&city_name=${city}`;

  try {
    const response = await axios.get(url);    
    return response.data;
  } catch (error) {
    throw new Error('City not found or error fetching weather data');
  }
};