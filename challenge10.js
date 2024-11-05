/*
November 4, 2024

https://freedium.cfd/https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

arr -> no funny biz
give me a sum to obtain
return pairs that = sum
*/

function twoSum(arr, sum) {
    //keep track of pairs (paris arr)
    const pairs = [];

    //hashmap obj
    const seenNums = {};

    //loop
    for (const currentNum of arr) {
        const diff = sum - currentNum;

        if (seenNums[diff]) {
            pairs.push([currentNum, diff])
        } else {
            seenNums[currentNum] = true
        };
    };
    return pairs
};

console.log(twoSum([1, 2, 2, 3, 4], 4), "[[2,2], [3,1]]");