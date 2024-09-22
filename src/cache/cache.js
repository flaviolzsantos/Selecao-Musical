
export class Cache {
    isCachedOn = false;

    constructor(ttlMilliseconds) {
      this.ttlMilliseconds = ttlMilliseconds; 
      this.cache = {}; 
      this.isCachedOn = process.env.CACHE_IS_ON == 'true';
    }
      
    set(key, value) {
      const now = Date.now();
      this.cache[key] = {
        value: value,
        timestamp: now
      };
    }
  
  
    get(key) {
      const cachedItem = this.cache[key];
  
      if (!cachedItem) {
        return null;
      }
  
      const isExpired = (Date.now() - cachedItem.timestamp) > this.ttlMilliseconds;
  
      if (isExpired) {
        delete this.cache[key];
        return null;
      }
  
      return cachedItem.value;
    }

    setCacheOn(isCachedOn){
      this.isCacheOn = isCachedOn;
    }
  }
  