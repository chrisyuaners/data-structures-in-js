// returns a merged array given two sorted arrays
function merge(arr1, arr2) {
    const merged = [];
    let first = 0;
    let second = 0;
    while (first < arr1.length && second < arr2.length) {
        if (arr1[first] > arr2[second]) {
            merged.push(arr2[second]);
            second++;
        } else {
            merged.push(arr1[first]);
            first++;
        } 
    }
    while (first < arr1.length) {
        merged.push(arr1[first]);
        first++;
    }
    while (second < arr2.length) {
        merged.push(arr2[second]);
        second++;
    }
    return merged;
}

// returns a sorted array - O(n log n)
function mergeSort(array) {
    if (array.length <= 1) return array;
    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));
    return merge(left, right);
}

const arr1 = [3,21,12,42,32,56,76];
console.log(mergeSort(arr1));