"Question"

const { stringify } = require("querystring")

// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.



// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

"Breakdown"
// .split("") converts to an array
// .join("") converts an array to a string


const isPalindrome = function (x) {
    let convertedString = String(x)
    let reversedString = convertedString.split("").reverse().join("")

    if (convertedString === reversedString) {
        return true
    }
    return false
};
console.log(isPalindrome(120))
console.log(isPalindrome(121))