"Question"
/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings. */




strs = ["flower", "flow", "flight"]

const LongestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""; // Handle edge case
    
    let prefix = strs[0]; // Initialize the prefix with the first string
    
    for (let i = 1; i < strs.length; i++) { // Start from the second string
        while (strs[i].indexOf(prefix) !== 0) { // Compare the prefix with the current string
            prefix = prefix.slice(0, prefix.length - 1); // Trim the prefix
            if (prefix === "") return ""; // If no common prefix, return an empty string
        }
    }
    
    return prefix; // Return the longest common prefix
}


console.log(LongestCommonPrefix(strs));


"Breakdown"
/* Using indexOf(prefix) !== 0:
The condition (strs[i].indexOf(prefix) !== 0) is specifically checking if the entire prefix starts at the beginning of the string strs[i]. Here's how it works:

Example 1:

prefix = "flow"
strs[i] = "flower"
"flower".indexOf("flow") returns 0 because "flower" starts with "flow".
Example 2:

prefix = "flower"
strs[i] = "flow"
"flow".indexOf("flower") returns -1 because "flower" is not found within "flow".
The !== 0 part checks whether prefix starts exactly at the beginning of strs[i]. If it doesn’t, then the prefix isn’t common, and the algorithm needs to shorten it.

*/

/* strs[i]:

This refers to the current string in the array strs that you're comparing against the prefix.
For example, if strs is ["flower", "flow", "flight"] and i = 1, then strs[i] would be "flow".
prefix:

This is the current prefix that you're testing to see if it's common among all the strings in the array.
Initially, this is set to the first string in the array, but it gets shortened if it's not a common prefix.
indexOf(prefix):

The indexOf method checks for the position where the substring prefix first appears in strs[i].
If prefix is found at the start of strs[i], indexOf(prefix) will return 0 because the prefix starts at the beginning of the string.
If prefix is not found at the start, it returns some other index or -1 if the prefix isn’t found at all.
!== 0:

This checks if the indexOf(prefix) result is not equal to 0.
If this condition is true, it means that the prefix does not start at the beginning of strs[i].
 */