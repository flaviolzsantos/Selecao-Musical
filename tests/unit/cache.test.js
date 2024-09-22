import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Cache } from '../../src/cache/cache.js'; 

describe('Cache Class', () => {
  let cache;

  beforeEach(() => {
    cache = new Cache(5000); 
    vi.useFakeTimers(); // Utiliza temporizadores falsos para controlar o tempo no teste
  });

  afterEach(() => {
    vi.clearAllTimers(); // Limpa os temporizadores após cada teste
  });

  it('deve armazenar e recuperar um valor do cache dentro do TTL', () => {
    cache.set('key1', 'value1');
    const result = cache.get('key1');
    expect(result).toBe('value1');
  });

  it('deve retornar null se a chave não existe no cache', () => {
    const result = cache.get('key_not_exist');
    expect(result).toBeNull();
  });

  it('deve remover o item do cache quando o TTL expira', () => {
    cache.set('key1', 'value1');

    // Avança o tempo em 6 segundos (6000 ms), excedendo o TTL de 5 segundos
    vi.advanceTimersByTime(6000);

    const result = cache.get('key1');
    expect(result).toBeNull();
  });

  it('não deve remover o item do cache antes do TTL expirar', () => {
    cache.set('key1', 'value1');

    // Avança o tempo em 4 segundos (4000 ms), ainda dentro do TTL
    vi.advanceTimersByTime(4000);

    const result = cache.get('key1');
    expect(result).toBe('value1');
  });

  it('deve verificar corretamente se o cache está ativado via set Cache', () => {
    cache.setCacheOn(true);
    expect(cache.isCacheOn).toBe(true);

    cache.setCacheOn(false);
    expect(cache.isCacheOn).toBe(false);
  });
  
});
