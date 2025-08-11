

function traverseTheTreeByStyle(node, result=[]){
     //console.log(333, node, node.style.color, node.style.fontSize, node.ELEMENT_NODE)
  if(node.nodeType === node.ELEMENT_NODE && node.tagName === "P"){
    console.log(333, node, node.style.color, node.style.fontSize, node.tagName)
       if(node.style.color === "red" && node.style.fontSize === 18)
       result.push(node)
  }

  for(let child of node.children){
    traverseTheTreeByStyle(child, result)
  }

  return result;

}


traverseTheTreeByStyle(document.body)