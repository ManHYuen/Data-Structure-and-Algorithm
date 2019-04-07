// Binary Search

function BinarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    
    while(low <= high) {
        let mid = Math.floor((low + high)/2);
        let guess = arr[mid];
        
        if(guess === target) {
            return target
        }
        
        if(guess > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return 'element does not existed'
}

let my_list = [1,2,5,7,9]

