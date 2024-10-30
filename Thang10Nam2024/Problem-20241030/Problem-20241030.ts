function isValidParenthesesArray(s: string): boolean {
    const stack : string[] = []
    const map: { [key: string]: string } = { '(': ')', '{': '}', '[': ']'}

    for (const char of s) {
        if (map[char]) { // check char by push it in map to check true of false
            stack.push(char);
        } else {
            // if char is closing char
            if (stack.length === 0 || map[stack.pop()!] !== char) {
            // check stack empty or not match 
            return false 
            }
        }
    }
    return stack.length === 0
}

const testCases = [
    { input: '()', expected: true },
    { input: '()[]{}', expected: true },
    { input: '{[()]}', expected: true },
    { input: '{{[[(())]]}}', expected: true },
    { input: '(]', expected: false },
    { input: '([)]', expected: false },
    { input: '((()))', expected: true },
    { input: '((())', expected: false },
    { input: '{{[[(())]]}}}', expected: false },
    { input: '', expected: true },
    { input: '(((((', expected: false },
    { input: '))))))', expected: false },
];


testCases.forEach(({ input, expected }, index) => {
    const result = isValidParenthesesArray(input);
    console.log(`Test Case ${index + 1}: ${result === expected ? 'Passed' : 'Failed'}`);
});