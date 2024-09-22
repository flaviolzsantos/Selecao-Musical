import { describe, it, expect, vi, beforeEach } from 'vitest';
import request from 'supertest';
import app from '../../src/app.js';

import * as weatherApi from '../../src/config/weatherApi.js';
import * as playlistService from '../../src/services/playListService.js';


vi.mock('../../src/config/weatherApi.js');
vi.mock('../../src/services/playListService.js');

describe('Playlist Controller - /playlist', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('deve retornar playlist de Pop para cidades com temperatura acima de 25ºC', async () => {

        weatherApi.default.mockResolvedValue({
            temp: 27,
            city_name: "São Paulo"
        });

        playlistService.default.mockReturnValue([
            "Musica Pop 1",
            "Musica Pop 2",
            "Musica Pop 3"
        ]);
       
        const res = await request(app).get('/api/playlist?city=São Paulo');

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('playlist');
        expect(res.body.playlist).toEqual(['Musica Pop 1', 'Musica Pop 2', 'Musica Pop 3']);

    });


    it('deve retornar playlist de Rock para cidades com temperatura entre 10ºC e 25ºC', async () => {

        weatherApi.default.mockResolvedValue({
            temp: 20,
            city_name: "São Paulo"
        });

        playlistService.default.mockReturnValue([
            "Musica Rock 1",
            "Musica Rock 2",
            "Musica Rock 3"
        ]);
       
        const res = await request(app).get('/api/playlist?city=São Paulo');

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('playlist');
        expect(res.body.playlist).toEqual(['Musica Rock 1', 'Musica Rock 2', 'Musica Rock 3']);

    });

    it('deve retornar playlist de músicas clássicas para cidades com temperatura abaixo de 10ºC', async () => {

        weatherApi.default.mockResolvedValue({
            temp: 5,
            city_name: "São Paulo"
        });

        playlistService.default.mockReturnValue([
            "Musica Classica 1",
            "Musica Classica 2",
            "Musica Classica 3"
        ]);
       
        const res = await request(app).get('/api/playlist?city=São Paulo');

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('playlist');
        expect(res.body.playlist).toEqual(['Musica Classica 1', 'Musica Classica 2', 'Musica Classica 3']);

    });


    it('deve retornar erro 400 se o parâmetro "city" não for fornecido', async () => {

        const res = await request(app).get('/api/playlist');

        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty('error');
        expect(res.body.error).toBe('City parameter is required');

    });

    it('deve retornar erro 500 se não retornar dados da api do tempo', async () => {

        weatherApi.default.mockResolvedValue(undefined);

        const res = await request(app).get('/api/playlist?city=São Paulo');
        expect(res.statusCode).toBe(500);
        expect(res.body).toHaveProperty('error');
        expect(res.body.error).contain('Cannot destructure property')
    });
  
});
