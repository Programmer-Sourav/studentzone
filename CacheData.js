const cache = {}


async function fetchData(downloadedData){
    if(cache[downloadedData]){
        console.log("Serving from Cache...")
        return cache[downloadedData];
    }

     console.log("Fetching from network...");
    const response = await fetch("https://api.example.com/data")
    const data = await response.json();

    cache[downloadedData] = data;
    return data;
}


const cache1 = {}


async function fetchData1(key, url, ttl= 5000){
    const now = Date.now();

    if(cache1[key] &&  now<cache1[key].expiry){
        return cache1[key]
    }
    else{
        delete cache1[key]
    }

    const response = await fetch(url)
    const data = await response.json();

    cache1[key] = {data: data, expiry: now+ttl};
}