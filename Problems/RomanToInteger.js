/** Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900. **/

"Question"
//Given a roman numeral, convert it to an integer.

function romanToInt(s) {
    // Mapping of Roman numerals to integers
    const romanToIntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    // Loop through the string of Roman numerals in reverse order
    for (let i = s.length - 1; i >= 0; i--) {
        let currentValue = romanToIntMap[s[i]];

        //If the current value is less than the previous value, subtract it
        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }

        prevValue = currentValue;
    }

    return total;
}


/** Example Walkthrough: romanToInt("MCMXCIV")
Let's walk through this function with the input "MCMXCIV":

Roman numeral: "MCMXCIV"
Integer value: 1000 + 900 + 90 + 4 = 1994
Initialization:

total = 0
prevValue = 0
Iteration 1 (i = 6, s[6] = 'V'):

currentValue = 5
currentValue (5) is not less than prevValue (0).
total += 5 → total = 5
prevValue = 5
Iteration 2 (i = 5, s[5] = 'I'):

currentValue = 1
currentValue (1) is less than prevValue (5).
total -= 1 → total = 4
prevValue = 1
Iteration 3 (i = 4, s[4] = 'C'):

currentValue = 100
currentValue (100) is not less than prevValue (1).
total += 100 → total = 104
prevValue = 100
Iteration 4 (i = 3, s[3] = 'X'):

currentValue = 10
currentValue (10) is less than prevValue (100).
total -= 10 → total = 94
prevValue = 10
Iteration 5 (i = 2, s[2] = 'M'):

currentValue = 1000
currentValue (1000) is not less than prevValue (10).
total += 1000 → total = 1094
prevValue = 1000
Iteration 6 (i = 1, s[1] = 'C'):

currentValue = 100
currentValue (100) is less than prevValue (1000).
total -= 100 → total = 994
prevValue = 100
Iteration 7 (i = 0, s[0] = 'M'):

currentValue = 1000
currentValue (1000) is not less than prevValue (100).
total += 1000 → total = 1994
prevValue = 1000
Final Output:

The loop ends, and 1994 is returned as the integer value of the Roman numeral "MCMXCIV". **/