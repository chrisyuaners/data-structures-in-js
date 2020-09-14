// sort array by comparing i and i + 1 elements - O(N^2) / best case O(N)
function bubbleSort(array) {
    let noSwaps;
    for (let i = array.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp; 
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return array;
}
const array = [2,4,1,32,12,42,53,11,90];
console.log(bubbleSort(array));