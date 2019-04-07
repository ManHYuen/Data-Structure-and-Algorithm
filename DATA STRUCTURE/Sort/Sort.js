// Bubble sort O(n^2)
function BubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            let current = arr[j]
            let future = arr[j+1]
            if (future < current) {
                arr[j] = future
                arr[j+1] = current
            }
        }
    }
    return arr;
}

const a = [5,3,1,6,7,2,4,8]

// Selection sort
function SelectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min_index = i;
        let lowest = arr[i]
        
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j
            }
        }
        arr[i] = arr[min_index]
        arr[min_index] = lowest
    }
    return arr
}

// Insertion Sort
function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        
        key = arr[i]
        
        j = i - 1
        
        while(j >= 0 && key < arr[j]) {
            arr[j+1] = arr[j]
            j--
        }
        
        arr[j+1] = key
    }
    return arr
}

//Merge Sorted
function MergeSort(arr) {
    if (arr.length > 1) {
        const mid = Math.floor(arr.length/2);
        const L = arr.slice(0, mid)
        const R = arr.slice(mid)
        
        MergeSort(L);
        MergeSort(R);
        
        let [i,j,k] = [0,0,0];
        
        while(i < L.length && j < R.length) {
            if (L[i] < R[j]) {
                arr[k] = L[i]
                i++
            } else {
                arr[k] = R[j]
                j++
            }
            k++
        }
        
        while(i < L.length) {
            arr[k] = L[i]
            i++
            k++
        }
        
        while(j < R.length) {
            arr[k] = R[j]
            j++
            k++
        }
    }
    return arr
}

//Quick Sorted
function QuickSorted(arr) {
    if (arr.length < 2) {
        return arr
    } else {
        const pivot = arr[0]
        const less = []
        const more = []
        
        for(let i of arr.slice(1)) {
            if (i <= pivot) {
                less.push(i)
            }
        }
        
        for(let i of arr.slice(1)) {
            if (i > pivot) {
                more.push(i)
            }
        }
        return QuickSorted(less).concat([pivot], QuickSorted(more))
    }
}