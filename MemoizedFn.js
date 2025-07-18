


function memoize(fn){
    const cache = {}

    return function(...args){
     
        const key = JSON.stringify(args);

        if(cache[key]){
            console.log("From cache");
            return cache[key]
        }

        const result = fn(...args)
        cache[key] = result;
        return result;

    }

}

// Expensive function
function slowAdd(a, b) {
  console.log("Calculating...");
  return a + b;
}

const memoizedAdd = memoize(slowAdd);

console.log(memoizedAdd(2, 3)); // Calculates
console.log(memoizedAdd(2, 3)); // Cached