class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    
    peek(){
        return this.top.value
    }
    
    push(value) {
        let node = new Node(value);
        if (this.length === 0) {
            this.top = node
            this.bottom = node
        } else {
            let temp = this.top
            node.next = temp;
            this.top = node 
        }
        this.length++
    }
    
    pop() {
        let node = this.top.value
        this.top = this.top.next
        
        if (this.length === 1) {
            this.bottom = null
        }
        
        if (this.length <= 0) {
            return 'no object to pop'
        }
        
        this.length--
        return node
    }
}

let myStack = new Stack()

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    
    peek() {
        return this.first.value
    }
    
    enqueue(value) {
        let node = new Node(value)
        if (this.length === 0) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node
        }
        this.length++
    }
    
    dequeue() {
        let node = this.first.value
        this.first = this.first.next
        
        if (this.length === 0) {
            return 'no object to dequeue'
        }
        
        if (this.length === 1) {
            this.last = null
        }
        
        this.length--
        return node
    }
}

let myQueue = new Queue()


class StackArray{
    constructor() {
        this.list = [];
        this.length = 0;
        this.top = null;
        this.bottom =  null;
    }
    
    push(value) {
        this.list.push(value)
        if (this.length === 0) {
            this.top = this.list[0]
            this.bottom = this.list[0]
        } else {
            this.top = this.list[this.length]
        }
        this.length++
    }
    
    pop() {
        let value = this.list.pop()
        this.top = this.list[this.length-2]
        if (this.length === 1) {
            this.top = null
            this.bottom = null;
        }
        this.length--
        return value
    }
    
    peek() {
        return this.list[this.length-1]
    }
}

let myStackArray = new StackArray()

class QueueFromStack {
    constructor() {
        this.list = [];
        this.length = 0;
    }
    
    peek() {
        return this.list[0]
    }
    
    push(value) {
        this.list.push(value)
        this.length++
    }
    
    pop() {
        const temp = [];
        for (let i = 0; i < this.length; i++) {
            temp.push(this.list.pop())
        }
        
        let value = temp.pop()
        let length = temp.length
        
        for (let i = 0; i < length; i++) {
            this.list.push(temp.pop())
        }
                
        this.length--
        return value
    }
}

let myQueueArray = new QueueFromStack()