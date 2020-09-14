// returns the index of the given value in an array of ints
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

const array = [2,4,12,23,43,65,78];
console.log(binarySearch(array, 100));