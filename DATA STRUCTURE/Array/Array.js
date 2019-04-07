// create array
class MyArray {
    // store the array length and data as an object
    constructor() {
        this.length = 0;
        this.data = {};
    }
    
    get(index) {
        return this.data[index]
    }
    
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
        
    }
    
    pop() {
        const last = this.data[this.length - 1]; 
        delete this.data[this.length - 1];
        this.length--;
        return last;
    }
    
    delete(index) {
        if (!this.data[index]) {
            return "That key doesn't exist"
        }
        const del = this.data[index];
        this.shiftItems(index);
        this.pop()
        return del
    }
    
    insert(index, item) {
        // get the previous value which is the value of the selected index
        let previous = this.data[index]
        for (let i = index + 1; i <= this.length; i++) {
            // get the current index, which is the selected index + 1
            let current = this.data[i]
            this.data[i] = previous
            // change the previous index to current
            previous = current
        }
        this.data[index] = item
        this.length++
    }
    
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            // remove the target content and shift everything forward 1
            this.data[i] = this.data[i + 1] 
        }
    }
}

const newArray = new MyArray();
console.log(newArray)


// reverse string

function reverse(s) {
    string = ''
    for (let i of s) {
        string = i + string
    }
    return string;
}

console.log(reverse('Hi My name is Andrei'))



function mergeSortedArrays(array1, array2) {
    const mergeArray = [];
    let index1 = 1
    let index2 = 1
    let array1Item = array1[0];
    let array2Item = array2[0];
    
    //check input
    if (array1.length === 0) {
        return array2;
    }
    
    if (array2.length === 0) {
        return array1;
    }
    
    // check to see if array1item existed included 0
    while ((array1Item || typeof(array1Item) === 'number') || (array2Item || typeof(array2Item) === 'number')) {
        console.log(array1Item)
        console.log(array2Item)
        if (array1Item <= array2Item) {
            mergeArray.push(array1Item)
            array1Item = array1[index1]
            index1++

        } else  {
            mergeArray.push(array2Item)
            array2Item = array2[index2]
            index2++

        }
    }
    console.log(mergeArray)
}

//longestWord

function longest(s) {
    const hash_table = new Map()
    
    words = s.split(/\W+/)
    
    let largest = 0
    
    for (let word of words) {
        if (word.length > largest) {
            largest = word.length
        }
        
        hash_table.get(word.length) ? hash_table.set(word.length, hash_table.get(word.length).concat([word])) : hash_table.set(word.length, [word])
    }
    
    return hash_table.get(largest)[0]
    
}