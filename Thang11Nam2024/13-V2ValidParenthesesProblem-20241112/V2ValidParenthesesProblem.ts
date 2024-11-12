// Valid Parentheses
function isValid (s: string) : boolean {
    const stack: string[] = []
    // map to AnhXa
    const map: {[key: string] : string} = {
        '}':'{',
        ']':'[',
        ')':'(',
    }
    for (const char of s) {
        if (char in map) {
            if (stack.pop() !== map[char] ) {
            return false }
            else {
            // if open char
            stack.push(char)
            }
        }
    }
    return stack.length === 0
}