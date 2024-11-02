/*
    Longest Substring Without Repeating Characters

    Require : Find out longest subString in given string that
    dont include repeat char.
    Learn : How to use string : use Algorithm Sliding window
    ThuatToanTruot combine with a data structure CauTrucDulieu
    Set 

    How to solve
    - Input  : String s.
    - Output : String and lenth of longest substring that not 
               include repeat char 

    Strategy
    1. Use 2 pointer left and right 
       left : point out head of current sub string
       right : Browse each char in string
    2. Set to keep track char that seen
       Use a set to save chars in current sub string
    3. Browse string
       If char at s[right] not have in set yet - add in and
       update maxLenght 
       If that char already have in, that mean sub string have 
       been repeat/ In this case move left pointer to next 
       position untill sub string not have any repeat char 
    4. Do until end String 

    Example
    string : s = "abcabcbb"
    * Begin : left = 0 ; right = 0 and maxLenght = 0
    Browse each char
        * right = 0: a - add to set, maxLenght = 1
        * right = 1: b - add to set, maxLength = 2
        ...
        * right = 3: a - already have in set, move left from 0
        delete a out of set , left = 1, and add new a maxLenght 
        still  3
        Repeat intill right go to end of string
*/

function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0;
    let left = 0;
    const charSet = new Set<string>();

    for (let right = 0; right < s.length; right++) {
        // right pointer will go itenary through string
        while (charSet.has(s[right])) {
            // While set charSet have char at element index 'right'
            charSet.delete(s[left]);
            // charSet have pointer left
            left++;
        }
        // While check that set charSet have char that right represent or
        // not : If have - do delete char like that in charSet 
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left +1 );
        /* 
            Why right - left + 1
            right : pointer in string
            left : pointer in subString
            Example : s = "abcabcbb" and we are browsing to char c means
            right = 2
            - When right = 2; left = 0 ; subString is "abc"
            - length of subString is right - left + 1 = 2 - 0 + 1 = 3 
         */

        /*
            Why ? maxLength = Math.max(maxLength, right - left + 1)
            maxLength is var save length of subString 
            Math.max help compare current value of maxLength with new value
            If new value is greater - will update and save new value

        */
    }

    return maxLength;
}

// Hàm kiểm tra các trường hợp test
function testLengthOfLongestSubstring() {
    const testCases: [string, number][] = [
        ["abcabcbb", 3], // "abc" là chuỗi con dài nhất
        ["bbbbb", 1],    // "b" là chuỗi con dài nhất
        ["pwwkew", 3],   // "wke" là chuỗi con dài nhất
        ["", 0],         // Chuỗi rỗng
        ["au", 2],       // "au" là chuỗi con dài nhất
        ["dvdf", 3],     // "vdf" là chuỗi con dài nhất
    ];

    for (const [input, expected] of testCases) {
        const result = lengthOfLongestSubstring(input);
        console.log(`Input: "${input}" => Output: ${result}, Expected: ${expected}`);
        console.assert(result === expected, `Test failed for input: "${input}"`);
    }
}

// Chạy hàm kiểm tra
testLengthOfLongestSubstring();