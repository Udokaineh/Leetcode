"Question"
/**Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.



Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1] **/


"Let's Break It Down Step-by-Step:"
/**First Iteration (i = 0):

Current number: nums[0] is 2.
Needed number: You calculate neededNumber = target - nums[0] = 9 - 2 = 7.
Check seenNumbers: You check if 7 is in seenNumbers. It’s not, because seenNumbers is empty at this point.
Store the Current Number: Since 7 is not in seenNumbers, you store the current number 2 in seenNumbers with its index:
seenNumbers[2] = 0; // Now seenNumbers is {2: 0}
Second Iteration (i = 1):

Current number: nums[1] is 11.
Needed number: You calculate neededNumber = 9 - 11 = -2.
Check seenNumbers: You check if -2 is in seenNumbers. It’s not.
Store the Current Number: Since -2 is not in seenNumbers, you store 11 in seenNumbers with its index:
seenNumbers[11] = 1; // Now seenNumbers is {2: 0, 11: 1}
Third Iteration (i = 2):

Current number: nums[2] is 15.
Needed number: You calculate neededNumber = 9 - 15 = -6.
Check seenNumbers: You check if -6 is in seenNumbers. It’s not.
Store the Current Number: Since -6 is not in seenNumbers, you store 15 in seenNumbers with its index:
seenNumbers[15] = 2; // Now seenNumbers is {2: 0, 11: 1, 15: 2}
Fourth Iteration (i = 3):

Current number: nums[3] is 7.
Needed number: You calculate neededNumber = 9 - 7 = 2.
Check seenNumbers: Now, you check if 2 is in seenNumbers. It is! You stored 2 in the first iteration with the index 0.
Return the Indices: Since you found 2 in seenNumbers, that means 2 (at index 0) and 7 (at index 3) together add up to 9, so you return their indices:
return [0, 3]; **/


function TwoSums(nums, target) {
    let seenNumbers = {}
    for (let i = 0; i < nums.length; i++) {
        let neededNumber = target - nums[i]

        if (seenNumbers[neededNumber] !== undefined) {
            return [seenNumbers[neededNumber], i]
        }
        seenNumbers[nums[i]] = i
    }
}

const result = TwoSums([2, 11, 15, 7], 9)

console.log(result);

