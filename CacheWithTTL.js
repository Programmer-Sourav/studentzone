const cache = {}

function setCache(key, value, ttl=3000){
    cache[key] = {value, 
         expiry: Date.now() + ttl
    }
}

function getCache(key){
    if(Date.now()>cache.expiry){
        delete cache[key];
        return null;
    }
    return cache.value;
}

// Usage
setCache("user:1", { name: "Sourav" }, 5000);

setTimeout(() => {
  console.log(getCache("user:1")); // within 5s => shows data
}, 3000);

setTimeout(() => {
  console.log(getCache("user:1")); // after 5s => null
}, 6000);