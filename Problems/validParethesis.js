"Question"
/**
 Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true
 */


"Breakdown"
/**
Step-by-Step Breakdown
Initialization:

We create an empty stack: stack = [].
We define a mapping of closing brackets to their corresponding opening brackets using bracketMap:

const bracketMap = {
    ')': '(',
    '}': '{',
    ']': '['
};
Iterating Through the String:

We start a loop to iterate through each character in the string s = "([])".
Iteration 1 (char = '('):

Since '(' is an opening bracket, we push it onto the stack:

stack.push('('); // stack is now ['(']
Iteration 2 (char = '['):

'[' is also an opening bracket, so we push it onto the stack:
stack.push('['); // stack is now ['(', '[']
Iteration 3 (char = ']'):

']' is a closing bracket, so we need to check if it matches the last opened bracket.
We look at the top of the stack, which is '[', and compare it to bracketMap[']'] (which is '['):

if (stack.pop() !== bracketMap[']']) {
    return false;
}
Since stack.pop() removes '[' from the stack, and it matches '[', the stack is now:

stack = ['(']; // After popping '['
Iteration 4 (char = ')'):

')' is another closing bracket, so we again check if it matches the last opened bracket.
We look at the top of the stack, which is '(', and compare it to bracketMap[')'] (which is '('):

if (stack.pop() !== bracketMap[')']) {
    return false;
}
Since stack.pop() removes '(' from the stack, and it matches '(', the stack is now:

stack = []; // After popping '('
Final Check:

After iterating through the entire string, we check if the stack is empty:

return stack.length === 0;
Since stack.length is 0, the function returns true, indicating the input string is valid.
 */

var isValid = function(s) {
    const stack = []
    const bracketMap = {
       ")": "(",
       "}": "{",
       "]": "["
    }

    for (let char of s) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char)
        }else {
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return false
            }
        }
    }

    return stack.length === 0
 
};
