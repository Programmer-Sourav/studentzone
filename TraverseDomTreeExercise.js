// Example: Get all <p> tags in DOM recursively

function getAllPTags(node, result = []){
    
     if(node.nodeType=== Node.ELEMENT_NODE && node.tagName === "p"){
        result.push(node)
     }

     for(let child of node.children){
         getAllPTags(child, result)
     }
     return result;
}


const pTags = getAllPTags(document.body);
console.log(pTags);