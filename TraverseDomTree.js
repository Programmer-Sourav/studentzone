//DFS (Depth-First Traversal) using recursion
function traverseDOM(node){
   if(!node) return;

   console.log(node.nodeName)

   // Recursively visit child nodes
   for(let child of node.childNodes){
    traverseDOM(child)
   }
}

// Start from document.body or document.documentElement
traverseDOM(document.body)

//DFS using a Stack (Iterative DFS)

function traverseDOMByDFS(root){
    const stack = [root]

    while(stack.length>0){
        const node = stack.pop();
        console.log(node.nodeName)


        // Push children in reverse order to maintain correct order
        for(let i = node.childNodes.length - 1 ; i>=0 ; i--){
             stack.push(node.childNodes[i])
        }
    }
}

traverseDOMByDFS(document.body)


function traverseDomBFS(root){
    const queue = [root]


    while(queue.length>0){
        const node = queue.shift();
        console.log(node.nodeName)

        for(let child of node.childNodes){
            queue.push(child)
        }
    }
}

traverseDomBFS(document.body)