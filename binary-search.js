// Program to implement iterative Binary Search

 
// A iterative binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1

 function binarySearch(arr, x)
{    
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (high >= low) {
         mid = low + Math.floor((high - low) / 2);
 
        // If the element is present at the middle
        // itself
        if (arr[mid] == x)
            return mid;
 
        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > x)
            high = mid - 1;
            
        // Else the element can only be present
        // in right subarray
        else 
            low = mid + 1;
    }
 
    // We reach here when element is not
    // present in array
    return -1;
}

    arr =new Array(2, 3, 4, 10, 40);
    x = 10;
    n = arr.length;
    result = binarySearch(arr, x);
    
(result == -1) ? console.log("Element is not present in array")
               : console.log ("Element is present at index " + result);


// recusive binary search
function recursiveBinarySearch(arr, target, left, right) {
    // If the left index is greater than the right, the target is not in the array
    if (left > right) {
        return -1;  // Target not found
    }

    // Calculate the middle index
    let mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
        return mid;  // Target found
    }

    // If the target is smaller than the middle element, search the left half
    if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    } 

    // If the target is larger than the middle element, search the right half
    return binarySearch(arr, target, mid + 1, right);
}

// Example usage
let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let target = 7;
let res = recursiveBinarySearch(arr, target, 0, arr.length - 1);

if (res !== -1) {
    console.log(`Target found at index: ${res}`);
} else {
    console.log('Target not found in the array');
}

