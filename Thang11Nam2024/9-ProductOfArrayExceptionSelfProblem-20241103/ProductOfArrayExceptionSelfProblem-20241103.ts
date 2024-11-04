/*

    ProductOfArrayExceptionSelf (LeetCode238)



    Require : Give int array nums, return array answer that

    answer[i] is the product TICH of all element in nums

    except num[i] - Do it without division and must have

    O(n) complexity

    Ex :

         input : nums = [1, 2, 3, 4]

         output : answer = [24(2*3*4Except1), 12(1*3*4Except2),

                           8(1*2*4Except3), 6(1*2*3Except4)]



    Solution : Using 2 sub array to store accumulation

    LuuTichLuy of left element and right element in original

    array - After that we will combine 2 array to find out

    total of elements except Self



    How to do :

    0. Create answer array that have same length with nums

       and all element must equal 1

    1. Use var leftProduct to store accumulation of left

       elements

       Browse through nums array from left to right, assign

       value of leftProduct for answer[i] and update

       leftProduct by production of it with nums[i]

    2. Use var rightProduct to store accumulation of left

       elemnets

       Browse through nums array from right to left, product

       answer[i] with rightProduct and update rightProduct

       by production of it with nums[i]



*/



function productExceptSelf(nums: number[]): number[] {

    const length = nums.length
 
    // Create an array with length and all element equal 1
 
    const answer = new Array(length).fill(1)
 
 
 
    let leftProduct = 1;
 
    for (let i = 0; i < length; i++) {
 
       // each round will assign value to answer[i]
 
       answer[i] = leftProduct;
 
       // leftProduct will store accumlation of left elements
 
       leftProduct *= nums[i]
 
    }
 
    // leftProduct will product each element per loop round
 
    // And push result in answer array
 
    // Ex: leftProduct = 1 - 1a - 1ab - 1abc - 1abcd[X]
 
    // R1 answer array = 1 - 1a - 1ab - 1abc
 
    // Not get 1abcd cuz it is production of all elements
 
 
 
    let rightProduct = 1;
 
    // Loop begin from right to left
 
    for (let i = length - 1; i >= 0; i--) {
 
       answer[i] *= rightProduct
 
       rightProduct *= nums[i]
 
    }
 
    return answer
 
    // rightProduct : act1 : product with elements of answer[]
 
    // act2 : will product each element per loop round
 
    // Ex: rightProduct = 1 - 1d - 1dc - 1dcb - 1dcba[X] (R2)
 
    //  answer array = will product from right to left
 
    // = 1(#0R1)1dcb(#3) - 1a(#1R1)1dc(#2R2) - 1ab(#2R1)1d(#1R2) - 1(#0R2)1abc(#3R1)
 
 }
 
 
 
 // Test cases
 
 function testProductExceptSelf() {
 
     const testCases: { input: number[], expected: number[] }[] = [
 
         { input: [1, 2, 3, 4], expected: [24, 12, 8, 6] },
 
         { input: [0, 1, 2, 3], expected: [6, 0, 0, 0] },
 
         { input: [1, 0, 3, 0], expected: [0, 0, 0, 0] },
 
         { input: [2, 3, 4, 5], expected: [60, 40, 30, 24] },
 
         { input: [1, 1, 1, 1], expected: [1, 1, 1, 1] },
 
     ];
 
 
 
     testCases.forEach(({ input, expected }, index) => {
 
         const result = productExceptSelf(input);
 
         console.log(`Test case ${index + 1}:`, result.toString() === expected.toString() ? 'Passed' : 'Failed');
 
     });
 
 }
 
 
 
 testProductExceptSelf();