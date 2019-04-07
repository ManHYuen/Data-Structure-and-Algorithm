//class HashTable {
//    constructor(size) {
//        this.data = new Array(size);
//    }
//    
//    _hash(key) {
//        let hash = 0;
//        for (let i = 0; i < key.length; i++) {
//            hash = (hash + key.charCodeAt(i) * i) % this.data.length
//        }
//        return hash
//    }
//    
//    set(key, value) {
//        let address = this._hash(key)
//        if (!this.data[address]) {
//        this.data[address] = [key, value]
//        }
//    }
//    
//    get(key) {
//        for (let i = 0; i < this.data.length; i++) {   
//            if(this.data[i]) {
//                if (this.data[i][0] === key) {
//                    return this.data[i][1]
//                }
//            } else {
//               
//            }
//        }
//    }
//} 
//
//const myHashTable = new HashTable(50);
//myHashTable.set('grape', 10000);
//myHashTable.set('Hello', 'World')
//console.log(myHashTable.get('grape'))
//console.log(myHashTable._hash('grape'))


class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }
    
    set(key, value) {
        let address = this._hash(key)
        if (!this.data[address]) {
        this.data[address] = [];
        }
        this.data[address].push([key, value])
    }
    
    get(key) {
        // that's why linked list in hash_table take 0(n)
        let address = this._hash(key)
        const currentBucket = this.data[address]
        if (!currentBucket) {
            return undefined
        }
        for (let i = 0; i < currentBucket.length; i++) {
            if (currentBucket[i][0] === key) {
                return currentBucket[i][1]
            }
        }
    }
    
    keys() {
        const keysArrays = []
        for (let i = 0; i < this.data.length; i++) {    
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    keysArrays.push(this.data[i][j][0])
                }
            }
        }
        return keysArrays
    }
} 

const myHashTable = new HashTable(250)
myHashTable.set('grape', 10000);
myHashTable.set('Hello', 'World')
myHashTable.set('apple', 54)
console.log(myHashTable.get('grape'))
console.log(myHashTable.get('apple'))
console.log(myHashTable.get('Hello'))
console.log(myHashTable.get('gg'))
console.log(myHashTable.keys())
console.log(myHashTable._hash('grape'))


function firstRecur(l) {
    hash_table = {}
    for (let word of l) {
        if (hash_table[word] === undefined) {
            hash_table[word] = 1
        } else {
            return word
        }  
    }
    return undefined
}

console.log(firstRecur([2,5,1,2,3,5,1,2,4]))
console.log(firstRecur([2,1,1,2,3,5,1,2,4]))
console.log(firstRecur([2,3,4,5]))


function firstRecurAlt(l) {
    let smallest = l.length;
    let result = undefined
    for (let i = 0; i < l.length; i++) {
        for (let j = i + 1; j < l.length; j++) {
            if (l[i] === l[j]) {
                if (Math.abs(i-j) < smallest) {
                    smallest = Math.abs(i-j)
                    result = l[i]
                }
            }
        }
    }
    return result
}

console.log(firstRecurAlt([2,5,1,2,3,5,1,2,4]))
console.log(firstRecurAlt([2,1,1,2,3,5,1,2,4]))
console.log(firstRecurAlt([2,3,4,5]))