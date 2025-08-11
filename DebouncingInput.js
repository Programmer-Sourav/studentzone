const inputSearch = document.getElementById("inputSearch");

let timer = null;

inputSearch.addEventListener("input", (event) => {
    const searchValue = event.target.value;

    clearTimeout(timer);
    timer = setTimeout(() => {
        console.log("Searching for:", searchValue);
        fetchData(searchValue);
    }, 2000);
});

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
