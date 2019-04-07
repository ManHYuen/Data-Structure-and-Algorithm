function BinaryTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    
//    insert(value) {
//        if(value < this.value && this.left) {
//            this.left.insert(value)
//        } else if (value < this.value) {
//            this.left = new Node(value)
//        } else if (value > this.value && this.right) {
//            this.right.insert(value)
//        } else if (value > this.value) {
//            this.right = new Node(value)
//        }
//    }
//    
//    contain(value) {
//        if (this.value === value) {
//            return this
//        } else if (value > this.value && this.right) {
//            return this.right.contain(value)
//        } else if (value < this.value && this.left) {
//            return this.left.contain(value)
//        } else {
//            return null;
//        }
//    }
    
}
    
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    insert(value) {
        if (!this.root) {
            this.root = new Node(value)
            return
        }
        
        let node = this.root;
        
        while(node) {
            if (value > node.value && node.right) {
                node = node.right
            } else if (value > node.value) {
                node.right = new Node(value)
                return
            } else if (value < node.value && node.left) {
                node = node.left
            } else if (value < node.value) {
                node.left = new Node(value)
                return
            }
        }
    }
    
    lookup(value) {
        let node = this.root
        
        while(node){
            if (node.value === value) {
                return node;
            } else if (value > node.value) {
                node = node.right;
            } else if (value < node.value) {
                node = node.left
            } else {
                return null
            }
        } 
    }
    
    delete(value) {
        if (!this.root) {
            return false
        }
        
        let currentNode = this.root;
        let parentNode = null;
        
        while(currentNode) {
            if(value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = parentNode.right
            } else if (currentNode.value === value) {
                //We have a match, get to work!
                
                //Option1: No right child:
                if (!currentNode.right) {
                    if(!parentNode) {
                        // this is for the root node
                        this.root = currentNode.left;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left
                        }
                    }
                }
                
                //Option 2: Right child which doesn't have a left child
            } else if (currentNode.right.left === null) {
                
                // change the left hand side of the right hand side of the current node(target) to the current left node
                currentNode.right.left = currentNode.left;
                if(parentNode === null) {
                    this.root = currntNode.right
                } else {
                    
                    
                    // which mean the left handed sided
                    if(currentNode.value < parentNode.value) {
                       parentNode.left = currentNode.right; 
                    } else if (currentNode.value > parentNode.value) {
                        parentNode.right = currentNode.right;
                    }
                }
            }
            
            //Option 3: right child that has a left child
            else {
                
                // find the right child's left most child
                let leftmost = currentNode.right.left;
                let leftmostParent = currentNode.right;
                
                // if leftmost.left existed
                while(leftmost.left) {
                    leftmostParent = leftmost;
                    leftmost = leftmost.left;
                }
                
                //change the original (leftmostParent node) to  null
                leftmostParent.left = leftmost.right;
                // change the leftmost node, the one we want to substitute, its left to the target node left
                leftmost.left = currentNode.left;
                // change the leftmost node, the one we want to substitute, its right to the target node right
                leftmost.right = currentNode.right;
                
                if (!parentNode) {
                    this.root = leftmost;
                } else {
                    if (currentNode.value > parentNode.value) {
                        parentNode.right = leftmost
                    } else if (currentNode.value < parentNode.value) {
                        parentNode.left = leftmost;
                    }
                }
                
            }
        }
        }
    
    breathFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);
        
        while(queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value)
            
            if(currentNode.left) {
                queue.push(currentNode.left)
            }
            
            if(currentNode.right) {
                queue.push(currentNode.right)
            }
        }
        return list
    }
    
    breathFirstSearchR(queue, list){
        if(!queue.length) {
            return list;
        }
        let currentNode = queue.shift();
        list.push(currentNode.value)
        if(currentNode.left) {
            queue.push(currentNode.left)
            }
            
        if(currentNode.right) {
            queue.push(currentNode.right)
            }
        return this.breathFirstSearchR(queue, list)
    }
    
//    depthFirstSearchPreOrder() {
//        let currentNode = this.root;
//        let list = [];
//        let queue = [];
//        queue.unshift(currentNode);
//        
//        while(queue.length > 0) {
//            currentNode = queue.shift()
//            list.push(currentNode.value)
//            
//            if(currentNode.right) {
//                queue.unshift(currentNode.right)
//            }
//            
//            if(currentNode.left) {
//                queue.unshift(currentNode.left)
//            }
//        }
//        return list
//    }
//    
    DFSInorder() {
        return traverseInorder(this.root, [])
    }
    
    DFSPostorder() {
        return traversePostOrder(this.root, [])
    }
    
    DFSPreorder() {
        return traversePreOrder(this.root, [])
    }
    
    validation(node, min = null, max = null) {
        if (min !== null && node.value < min) {
            return false
        }

        if (max !== null && node.value > max) {
            return false
        }
        
        if (node.left && !this.validation(node.left, min, node.value)) {
            return false
        }
        
        if (node.right && !this.validation(node.right, node.value, max)) {
            return false
        }
        
        return true
    }
}

function traverseInorder(node, list) {
    if (node.left) {
        traverseInorder(node.left, list);
    }
    list.push(node.value)
    if (node.right) {
        traverseInorder(node.right, list)
    }
    return list
}

function traversePreOrder(node, list) {
    list.push(node.value)
    if (node.left) {
        traversePreOrder(node.left, list);
    }
    if (node.right) {
        traversePreOrder(node.right, list)
    }

    return list
}

function traversePostOrder(node, list) {
     if(node.left) {
         traversePostOrder(node.left, list)
     }
    if(node.right) {
        traversePostOrder(node.right, list)
    }
    list.push(node.value)
    return list
    

}
//   9
// 4   20
//1 6 15 170
    
let test = new BinarySearchTree()
test.insert(9)
test.insert(4)
test.insert(20)
test.insert(1)
test.insert(6)
test.insert(15)
test.insert(170)
console.log(JSON.stringify(traverse(test.root)))
console.log(test.breathFirstSearchR([test.root], []))
console.log(test.DFSInorder())
console.log(test.DFSPreorder())
console.log(test.DFSPostorder())

function traverse(node) {
    const tree = {value: node.value}
    tree.left = node.left === null ? null: traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree
}




// binary heap
class BinaryHeap{
    constructor() {
        this.heap = []
    }
    
    insert(value) {
//        if (this.heap.length === 0) {
//            this.heap.push()
//        } else {
//            this.heap.push()
//            this.BubbleUp()
//
//        }
        
        this.heap.push(value)
        this.BubbleUp()
    }
    
    BubbleUp() {
        let index = this.heap.length - 1
        
        while (index > 0) {
            let element = this.heap[index]
            let parentIndex = Math.floor((index - 1) / 2)
            let parent = this.heap[parentIndex];
            
            if (parent > element) break;
            this.heap[parentIndex] = element;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }
}

let heap = new BinaryHeap();


