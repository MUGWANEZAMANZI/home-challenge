/*Function  definition start here, the function has two arguments: an argument for storing an array of numbers and an argument for target sum*/
function TargetSum(arr, target) {
    let start = 0;
    let sum = 0;
/*Summing all array elements to single number sum with for loop control structure*/
    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];
/*If sum is greater than the target and length of array greater than 0, sum will be equal to the difference of all numbers in an array. The remaining sum will equal to test for equality*/
        while (sum > target && start < end) {
            sum -= arr[start];
            start++;
        }
/*if the remaining sum is equl to the target, the numbers to give the required sum were found*/
        if (sum === target) {
            return true;
        }
    }

    return false;
}

// Test the function with these values
let arr = [4, 2, 7, 1, 9, 5];
let target = 6;
/*function execution begins here.*/
console.log(TargetSum(arr, target));  // Outputs: true
