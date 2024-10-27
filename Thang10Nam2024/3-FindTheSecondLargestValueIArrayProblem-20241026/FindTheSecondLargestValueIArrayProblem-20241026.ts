function secondLargest(arr) {
    let largest = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];

        if (num > largest) {
            second = largest;  // Cập nhật giá trị lớn thứ hai
            largest = num;     // Cập nhật giá trị lớn nhất
        } else if (num > second && num < largest) {
            second = num;      // Cập nhật giá trị lớn thứ hai nếu số hiện tại lớn hơn second
        }
    }

    // Kiểm tra xem có giá trị lớn thứ hai hay không
    return second === -Infinity ? undefined : second;
}

// Ví dụ kiểm tra
console.log(secondLargest([3, 5, 1, 8, 7])); // Kết quả: 7
console.log(secondLargest([3, 3, 3]));       // Kết quả: undefined
console.log(secondLargest([-1, -2, -3, -4])); // Kết quả: -2
