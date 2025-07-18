/*
 * 
 * Detect when the user reaches the bottom of the page.

Fetch more content via an API or simulated data.

Append the new content to the DOM.
 */


const container = document.getElementById("container");


let itemCount = 0;

function loadItems(){
    for(let i = 0; i<100; i++){
         const div = document.createElement("div");
         div.className = "Item";
         div.textContent = `Item ${itemCount++}`
         container.appendChild(div)
    }
}

loadItems();


window.addEventListener("scroll", ()=>{
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    if(scrollTop + windowHeight >= fullHeight - 50){
        loadItems();
    }
})
