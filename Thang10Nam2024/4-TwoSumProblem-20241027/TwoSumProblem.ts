function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>() // Create hashMap
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // find needValue
        if (map.has(complement)) {
            // check map have complement or not
            return [map.get(complement)!, i] // i is index of num / map.get(complement)! is index of complement
        }
        map.set(nums[i],i)
    }
    return [];
}


const nums1Basic = [2, 7, 11, 15]; // Kỳ vọng: [0, 1]
const target1 = 9;
console.log('nums1Basic : ', twoSum(nums1Basic,target1))

const nums2Negative = [-1, -2, -3, -4, -5]; // Kỳ vọng: [2, 4]
const target2 = -8;
console.log('nums2Negative : ', twoSum(nums2Negative,target2))


const nums3DupNumber = [3, 3, 4, 5]; // Kỳ vọng: [0, 1]
const target3 = 6;
console.log('nums3DupNumber : ',twoSum(nums3DupNumber,target3))


const nums4NotInOrder = [10, 3, 5, 7, 1]; // Kỳ vọng: [1, 3] (3 + 5 = 8)
const target4 = 8;
console.log('nums4NotInOrder : ', twoSum(nums4NotInOrder,target4))


const nums5ManyCouple = [1, 2, 3, 4, 5, 6];
const target5 = 7; // Kỳ vọng: [0, 5] hoặc [1, 4] hoặc [2, 3]
console.log('nums5ManyCouple : ', twoSum(nums5ManyCouple,target5))