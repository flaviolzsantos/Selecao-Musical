
import getPlaylistByTemperature from '../services/playlistService';
import getWeatherData from '../config/weatherApi';

export default async function getPlaylist(req, res) {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ error: 'City parameter is required' });
  }

  try {
    const weatherData = await getWeatherData(city);
    const temperature = weatherData.temp;
    const playlist = getPlaylistByTemperature(temperature);

    res.json({
      city: city,
      temperature: temperature,
      playlist: playlist
    });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

