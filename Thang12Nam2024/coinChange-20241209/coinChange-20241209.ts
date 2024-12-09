Bài toán: Coin Change
Bạn được cho một danh sách các đồng xu với các mệnh giá khác nhau (coins) và một số nguyên dương amount (tổng tiền cần đổi). Nhiệm vụ của bạn là tìm số lượng ít nhất các đồng xu cần thiết để đạt được tổng tiền bằng amount. Nếu không thể đổi được số tiền đó, trả về -1.

Input
coins: Một mảng các số nguyên dương đại diện cho các mệnh giá của đồng xu.
amount: Một số nguyên dương đại diện cho tổng tiền cần đổi.
Output
Một số nguyên, là số lượng ít nhất các đồng xu cần để đạt được amount.
Trả về -1 nếu không có cách nào để đạt được amount.
Ví dụ
Ví dụ 1:
Input:
plaintext
Copy code
coins = [1, 2, 5]
amount = 11
Output:
plaintext
Copy code
3
Giải thích: 11 = 5 + 5 + 1 (cần 3 đồng xu).
Ví dụ 2:
Input:
plaintext
Copy code
coins = [2]
amount = 3
Output:
plaintext
Copy code
-1
Giải thích: Không thể đổi được 3 chỉ bằng đồng xu mệnh giá 2.
Ví dụ 3:
Input:
plaintext
Copy code
coins = [186, 419, 83, 408]
amount = 6249
Output:
plaintext
Copy code
20
Ý tưởng giải quyết
Bài toán này thuộc dạng bài Lập trình động (Dynamic Programming). Ta xây dựng giải pháp dựa trên mảng dp để lưu trữ số lượng đồng xu ít nhất cần để đổi được mỗi giá trị từ 0 đến amount.

Khởi tạo mảng dp:

dp[i]: số đồng xu ít nhất cần để đạt được tổng tiền i.
Ban đầu, khởi tạo tất cả các giá trị trong dp là amount + 1 (giả định không thể đổi được).
dp[0] = 0 vì không cần đồng xu nào để đổi tổng tiền 0.
Cập nhật giá trị dp[i]:

Duyệt qua từng mệnh giá trong coins.
Với mỗi mệnh giá coin, cập nhật:
plaintext
Copy code
dp[i] = min(dp[i], dp[i - coin] + 1)
Điều này có nghĩa là: nếu dùng đồng xu coin, số đồng xu ít nhất cần để đạt i sẽ là số đồng xu để đạt i - coin cộng thêm 1.
Kết quả:

Nếu dp[amount] > amount, trả về -1 (không thể đổi được).
Ngược lại, trả về dp[amount].
Mã giả (Pseudo Code)
python
Copy code
def coinChange(coins, amount):
    # Bước 1: Khởi tạo mảng dp
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0  # Không cần đồng xu để đổi được 0

    # Bước 2: Duyệt qua các đồng xu và cập nhật dp
    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] = min(dp[i], dp[i - coin] + 1)

    # Bước 3: Kết quả
    return dp[amount] if dp[amount] != float('inf') else -1
Độ phức tạp
Thời gian: 
𝑂
(
𝑛
×
amount
)
O(n×amount), với 
𝑛
n là số lượng đồng xu.
Không gian: 
𝑂
(
amount
)
O(amount), do mảng dp chiếm dụng không gian.