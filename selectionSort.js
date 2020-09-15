// returns a sorted array by comparing two values at a time to see which is smaller and swap until array is sorted
// O(N^2)
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            const temp = array[i];
            array[i] = array[lowest];
            array[lowest] = temp;
        }
    }
    return array;
}

const array = [0,2,34,22,10,19,17];
console.log(selectionSort(array));