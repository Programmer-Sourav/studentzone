const inputSearch = document.getElementById("inputSearch");

let lastCall = 0; 
const throttledDelay = 2000;

inputSearch.addEventListener("input", (event)=>{
    const now = Date.now();
    const searchValue = event.target.value;

    if(now - lastCall >=throttledDelay){
        lastCall = now;
        console.log("Throttled search for:", searchValue);
        fetchData(searchValue);
    }
})

const fetchData = (searchValue) => {
    fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(searchValue)}`)
        .then((res) => res.json())
        .then((data) => {
            console.log("Fetched data:", data);
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });
};


// | Feature     | Debouncing                     | Throttling                     |
// | ----------- | ------------------------------ | ------------------------------ |
// | Behavior    | Waits until user stops typing  | Executes at regular intervals  |
// | Use case    | Search input, autosave         | Scroll listener, resize events |
// | Code action | Delays execution after silence | Limits how often function runs |
