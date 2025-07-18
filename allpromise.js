
const returnedPromise1 = fetch('https://jsonplaceholder.typicode.com/todos/1')
const returnedPromise2 = fetch('https://jsonplaceholder.typicode.com/todos/2')
const returnedPromise3 = fetch('https://jsonplaceholder.typicode.com/todos/3')


Promise.all([returnedPromise1, returnedPromise2, returnedPromise3])
.then((responses)=>Promise.all(responses.map((response)=>response.json())))
.then((results)=>console.log(results)).catch((error)=>console.log(error))



const pr1 = Promise.reject("Error!");
const pr2 = Promise.resolve(10);
const pr3 = Promise.resolve(20);

Promise.any([pr1, pr2, pr3]).then((value)=>{
    console.log(`First fulfilled Promise Value `, value)
}).catch((error)=>{
    console.log(`All Promises Rejected `, error.errors)
})