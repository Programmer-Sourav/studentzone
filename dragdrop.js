const dragItem = document.getElementById("dragme")
const dropzone = document.getElementById("dropzone")

dragItem.addEventListener("dragstart", (e)=>{
    e.dataTransfer.setData("text/plain", dragItem.id)
})

dropzone.addEventListener("dragover", (e)=>{
    e.preventDefault();
})

dropzone.addEventListener("drop", (e)=>{
e.preventDefault();
   const id = e.dataTransfer.getData("text");
    const draggedElement = document.getElementById(id);
    dropzone.appendChild(draggedElement);
})