function test(a, b) {
    t0 = performance.now()
    for (let i of a) {
        if (b.includes(i)) {
            t1 = performance.now()
            console.log(t1-t0)
            return true
        }
    }
    t1 = performance.now()
    console.log(t1 - t0)
    return false
}

function test2(a, b) {
    t0 = performance.now()
    for (let i of a) {
        for (let j of b) {
            if (i === j) {
                t1 = performance.now()
                console.log(t1-t0)
                return true
            }
        }
    }
    t1 = performance.now()
    console.log(t1-t0)
    return false
}

function test3(a, b) {
    t0 = performance.now()
    hash = {}
    for (let i of a) {
        hash[i] = true
    }

    for (let i of b) {
        if (hash[i]) {
            t1 = performance.now()
            console.log(t1-t0)
            return hash[i]
        }
    }
    t1 = performance.now()
    console.log(t1-t0)
    return false
}

// python equivalent return any([i in b for i in a])
function test4(a, b) {
    return a.some(function(e) {
        return b.includes(e)
    })
}

a = ['a', 'b', 'c', 'x']
b = ['z', 'y', 'i']
c = ['z', 'y', 'x']
large = new Array(100000).fill(5)
large.push('a')


function hasSum(arr, n) {
    let empty = new Set();
    for (let i of arr) {
        if (empty.has(i)) {
            return true
        } else {
            empty.add(n - i)
        }
    }
    return false
}