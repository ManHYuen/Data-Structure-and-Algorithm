function fibonacci(n) {
    if (n < 2) {
        return n
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

function fibonacciMaster() {
    let cache = {};
    return function fib(n) {
        if (n in cache) {
            console.log(cache)
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                console.log(cache)
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n]
            }
        }
    }
}