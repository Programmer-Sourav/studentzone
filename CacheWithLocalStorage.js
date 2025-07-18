function setCache(key, value){
    localStorage.setItem(key, JSON.stringify({value, expiry: Date.now() + 3000}))
}

function getCache(key){
    const raw = localStorage.getItem(key);
    if(!raw) return null;

    const { value, expiry } = JSON.parse(raw);

    if(Date.now()>expiry){
        localStorage.removeItem(key)
        return null;
    }

    return value;
}

// Usage
setCache("user", { name: "Sourav" });
console.log(getCache("user"));



describe("API Call Fetch", ()=>{
    test("API should return data", async(req, res)=>{
        const response = await fetch("url");
        const data = await response.json();
    
        res.json({statusCode: 200, message: "Sucess", data: data})
        expect(statusCode).toBe(200)
        expect(data).toEqual(data)
    })
})