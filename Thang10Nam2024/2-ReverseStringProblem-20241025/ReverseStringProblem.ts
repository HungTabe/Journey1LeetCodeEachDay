function handleReverseString (s: string) {
    return s.split('').reverse().join('')
}

const originString = 'GoodByeMyFriend'
const reverseString = handleReverseString(originString)

console.log('origin string: ', originString) // 'GoodByeMyFriend'
console.log('reverse strign: ', reverseString) // 'dneirFyMeyBdooG'