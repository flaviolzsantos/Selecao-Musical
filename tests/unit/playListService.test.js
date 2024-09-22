import { expect } from 'chai';
import getPlaylistByTemperature from '../../src/services/playListService.js'

describe('Playlist Service - getPlaylistByTemperature', () => {
  it('deve retornar músicas Pop se a temperatura for maior que 25ºC', () => {
    const playlist = getPlaylistByTemperature(30);
    expect(playlist).to.deep.equal(['Musica Pop 1', 'Musica Pop 2', 'Musica Pop 3']);
  });

  it('deve retornar músicas de Rock se a temperatura for entre 10ºC e 25ºC', () => {
    const playlist = getPlaylistByTemperature(20);
    expect(playlist).to.deep.equal(['Musica Rock 1', 'Musica Rock 2', 'Musica Rock 3']);
  });

  it('deve retornar músicas clássicas se a temperatura for menor que 10ºC', () => {
    const playlist = getPlaylistByTemperature(5);
    expect(playlist).to.deep.equal(['Musica Classica 1', 'Musica Classica 2', 'Musica Classica 3']);
  });
});
