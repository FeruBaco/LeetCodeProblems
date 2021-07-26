/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function(nums, target) {
    let result = []
    for(let i = 0; i < nums.length; i++) {
        let actual = nums[i];
        let newArray = [...nums];
        newArray.splice(i, 1);
        for(let j = 0; j < newArray.length; j++) {
            let actual2 = newArray[j]
            let res = actual + actual2
            if(res == target) {
                result.push(nums.indexOf(actual))
                result.push(nums.lastIndexOf(actual2))
                return result
            }
        }
    }
};

let nums = [1,3,4,2];
target = 6;
console.log(twoSum(nums, target));