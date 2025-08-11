const p1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
const p2 = fetch("https://jsonplaceholder.typicode.com/posts/2");
const p3 = fetch("https://jsonplaceholder.typicode.com/posts/3");


Promise.all([p1, p2, p3]).then((responses)=>
    Promise.all(responses.map((response)=>response.json()))
    .then(data=>console.log(data)).catch((error)=>console.error("Error ", error)));


Promise.allSettled([p1, p2, p3]).then((responses)=>responses.map((response, index)=>{
    if(response.status==="fulfilled"){
        console.log(`API ${index+1} succeeded`, response.value.url);
    }
    else(response.status ==="failed"){
       console.warn(`API ${index+1} Failed`, response.reason)
    } 
}))


Promise.race([p1, p2, p3]).then((response)=>response.json()).
then((data)=>console.log("Fastest Successful Promise", data))
.catch((error)=>console.error("Fastest Failed ", error))


Promise.any([p1, p2, p3]).then((response)=>response.json()).then((data)=>console.log("Fast Fulfilled Promise ", data)).catch((error)=>console.error("All Failed Promises ", error))