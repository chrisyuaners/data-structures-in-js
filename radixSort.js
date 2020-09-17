// returns the base of an integer given a base
function getDigit(num, base) {
    return Math.floor(Math.abs(num) / Math.pow(10, base)) % 10;
}

// returns the number of digits in a given int
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// given an array of ints, returns the number of digits in the largest int
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// time - O(nk) (best/average/worst)
// space - O(n + k)
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

const array = [12,234,234,4325,12,2,4352];
console.log(radixSort(array));