import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import axios from 'axios';
import getWeatherData from '../../src/config/weatherApi.js';

vi.mock('axios'); 

describe('getWeatherData', () => {
  
  const env = process.env;

  beforeEach(() => {
    vi.resetAllMocks();
    process.env = { ...env, WEATHER_URL: 'https://teste.com', WEATHER_API_KEY: 'key' }; 
  });

  afterEach(() => {
    process.env = env; // Restaura as variáveis de ambiente originais após os testes
  });

  it('deve retornar os dados do clima para uma cidade válida', async () => {
    
    const mockedResponse = {
      data: {
        temp: 27,
        city_name: 'São Paulo'
      }
    };

    axios.get.mockResolvedValue(mockedResponse);

    const result = await getWeatherData('São Paulo');

    
    expect(axios.get).toHaveBeenCalledWith(
      'https://teste.com?fields=only_results,temp,city_name&key=key&city_name=São Paulo'
    );

    expect(result).toEqual(mockedResponse);
  });

  it('deve lançar um erro quando a cidade não for encontrada', async () => {
    
    axios.get.mockRejectedValue(new Error('City not found or error fetching weather data'));

    await expect(getWeatherData('CidadeInexistente')).rejects.toThrow(
      'City not found or error fetching weather data'
    );
  });
});
