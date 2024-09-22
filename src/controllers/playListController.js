
import getPlaylistByTemperature from '../services/playListService.js';
import getWeatherData from '../config/weatherApi.js';

export default async function getPlaylist(req, res) {
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({ error: 'City parameter is required' });
  }

  try {
    const {temp, city_name} = await getWeatherData(city);
    const playlist = getPlaylistByTemperature(temp);

    res.json({
      city: city_name,
      temperature: temp,
      playlist: playlist
    });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

