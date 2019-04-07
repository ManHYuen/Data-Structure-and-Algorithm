let test = {
    age: 55,
    name: 'Tom',
    another: {
        age: 60,
        name: 'Mary'
    }
}



function dis(o) {
    for (let i in o) {
        if (typeof(o[i]) === 'object') {
            return dis(o[i])
        } else {
            console.log(o[i])
        }
    }
}

// test number of max stack
function computeMaxCallStackSize() {
        try {
            return 1 + computeMaxCallStackSize();
        } catch (e) {
            // Call stack overflow
            return 1;
        }
    }

let counter = 0;
function inception() {
    console.log(counter)
    if (counter > 3) {
        return 'done';
    }
    counter++
    return inception()
}

inception()

// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Usually you have 2 returns

// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
    if (number <= 1) {
        return 1
    } else {
        return number * findFactorialRecursive(number - 1)
    }
}
    
function findFactorialIterative(number) {
    let result = 1
    for (let i = number; i>=1; i--) {
        result *= i
    }
    return result;
}


// Fibonacci Number

function fib(n) {
    if (n < 2) {
        return n
    } else {
        return fib(n-1) + fib(n-2);
    }
}

function fib2(n) {
    let arr = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    
    return arr[n]
}

function cache(func) {
    const table = {};
    
    return function(...args) {
        if (table[args]) {
            return table[args];
        } else {
            const result = func.apply(this, args);
            table[args] = result;
            return result
        }
    }
}

fastfib = cache(fib)


// reversed string recursion

function reverseString(str) {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str.charAt(0)
    }
}