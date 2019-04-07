// 10 --> 5 --> 16

let myLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}


class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1;
    }
    
    append(value) {
        this.tail.next = {
            value: value,
            next: null
        }
        this.tail = this.tail.next
        this.length++
    }
    
    preend(value) {
        this.head = {
            value: value,
            next: this.head
        }
        this.length++
    }
    
    _get(index) {
        let counter = 0;
        let node = this.head;
        
        while(node) {
            if (counter === index) {
                return node
            } else {
                counter++
                node = node.next
            }
        }
    }
    
    insert(index, value) {
        if (index >= this.length) {
            // same as append method
            let node = {
                value: value,
                next: null
            }
            this.tail.next = node
            this.tail = this.tail.next
            this.length++
            return
        }
        
        if (index === 0) {
            let node = {
                value: value,
                next: this.head
            }
            this.head = node
            this.length++
            return
        }
        
        const previous = this._get(index-1)
        let node = {
            value: value,
            next: previous.next
        }
        previous.next = node  
        this.length++
    }
    
    remove(index) {
        if (index > this.length) {
            return
        }
        
        if (index === 0) {
            this.head = this.head.next
            this.length--
            this.tail = this._get(this.length-1)
            return
        }
        
          if (index === this.length - 1) {
            let previous = this._get(index-1)
            previous.next = previous.next.next
            this.tail = previous
            this.length--
            return
        }
        
        let previous = this._get(index-1)
        previous.next = previous.next.next
        this.length--
    }
    
//    reverse() {
//        let node = this.head
//        const empty = []
//        while(node) {
//            empty.unshift(node.value)
//            node = node.next
//        }
//        
//        node = this.head
//        for(let i = 0; i < this.length; i++) {
//            node.value = empty[i]
//            node = node.next
//        }
//    }
    
    reverse() {
        if (this.length === 1) {
            return this.head
        }
        //1-->2-->3-->4
        //first = 1, second = 2, temp = 3
        //2.next = 1
        //second = 3, first = 2
        //2-->1-->3-->4
        //3.next = 2
        // second = 4, first = 3
        //3-->2-->1-->4
        //4.next = 3
        //second = null, first = 4
        //4-->3-->2-->1
        //second = null, loop break
        let first = this.head;
        let second = first.next
        while(second) {
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.tail = this.head;
        this.head = first;
    }
}

const test = new LinkedList(10)


// doubly linked lists
class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
    this.tail = this.head
    this.length = 1
    }
    
    append(value) {
        let newNode = {
            value: value,
            next: null,
            prev: null
        }
        
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        
    }
    
    preend(value) {
        let newNode = {
            value:value,
            next:null,
            prev:null
        }
        newNode.next = this.head;
        this.head.prev = newNode
        this.head = newNode
        this.length++
    }
    
    _get(index) {
        let counter = 0
        let node = this.head
        
        while(node) {
            if (counter === index) {
                return node;
            } else {
                counter++
                node = node.next
            }
        }
    }
    
    insert(index, value) {
        let newNode = {
            value: value,
            next: null,
            prev: null
        }
        
        if(index === 0) {
            newNode.next = this.head
            this.head.prev = newNode;
            this.head = newNode;
            this.length++
            return
        }
        
        if(index >= this.length) {
            newNode.prev = this.tail
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++
            return
        }
        
        const leader = this._get(index-1)
        const follower = this._get(index)
        newNode.prev = leader
        leader.next = newNode
        follower.prev = newNode
        newNode.next = follower
        this.length++
    }
}
let doubly = new DoublyLinkedList(10);