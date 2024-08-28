"Question"
// Given an integer x, return true if x is a palindrome
// and false otherwise.


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



"Breakdown"
// Call isPalindrome(123):

// x = 123
// Original number is 123.
// Loop 1:
// lastDigit = 123 % 10 = 3
// reversedNumber = 0 * 10 + 3 = 3
// x = Math.floor(123 / 10) = 12
// Loop 2:
// lastDigit = 12 % 10 = 2
// reversedNumber = 3 * 10 + 2 = 32
// x = Math.floor(12 / 10) = 1
// Loop 3:
// lastDigit = 1 % 10 = 1
// reversedNumber = 32 * 10 + 1 = 321
// y = Math.floor(1 / 10) = 0
// End of loop: reversedNumber = 321, which does not match originalNumber = 123.

"without converting number to string first"
const numberPalindrome = function (x) {
    originalNumber = 0
    reversedNumber = 0

    if (x < 0) return false  // negative numbers are not palindrome

    while (x > 0) {
        let lastDigit = x % 10  // % 10 to get the last digit of a number

        reversedNumber = reversedNumber * 10 + lastDigit

        x = Math.floor(x / 10)
    }

    return originalNumber === reversedNumber
}

console.log(numberPalindrome(123));   // false -> 123 is not a palindrome.
console.log(numberPalindrome(1221));  // true  -> 1221 is a palindrome.