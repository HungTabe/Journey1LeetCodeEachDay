/*
    V3LongestSubstringWithoutRepeatingCharactersProblem-20241114
    *Bài toán Longest Substring Without Repeating Characters yêu cầu 
    tìm độ dài của chuỗi con dài nhất trong một chuỗi cho trước sao
    cho chuỗi con đó không chứa ký tự lặp lại.

    *Mô tả chi tiết:
    Giả sử bạn có một chuỗi ký tự, nhiệm vụ của bạn là tìm chuỗi con 
    dài nhất mà trong đó không có ký tự nào xuất hiện nhiều hơn một 
    lần.

    *Ví dụ:
    Đầu vào: "abcabcbb"
    Đầu ra: 3
    Chuỗi con dài nhất không chứa ký tự lặp lại là "abc", có độ dài
    là 3.

    Đầu vào: "bbbbb"
    Đầu ra: 1
    Chuỗi con dài nhất không chứa ký tự lặp lại là "b", có độ dài
    là 1.

    Đầu vào: "pwwkew"
    Đầu ra: 3
    Chuỗi con dài nhất không chứa ký tự lặp lại là "wke", có độ dài
    là 3.

    *Cách tiếp cận:
    Để giải quyết bài toán này, một trong những cách hiệu quả nhất là 
    sử dụng Thuật toán Con trượt (Sliding Window) kết hợp với Hash Map
    hoặc Set.

    *Giải thích thuật toán Sliding Window
    Window: Một cửa sổ con của chuỗi, trong đó ta duy trì một chuỗi
    con không chứa ký tự lặp lại.
    Slide: Cửa sổ này sẽ dịch chuyển từ trái sang phải, mỗi lần mở
    rộng hoặc thu hẹp để duy trì điều kiện không có ký tự lặp lại.

    *Các bước cơ bản:
    1-Khởi tạo: Dùng hai con trỏ, một con trỏ start (bắt đầu của chuỗi
    con) và một con trỏ end (kết thúc của chuỗi con), để biểu thị
    cửa sổ con.
    2-Duyệt qua chuỗi:
    Dịch con trỏ end từ trái sang phải để mở rộng cửa sổ.
    Nếu ký tự ở chỉ số end đã xuất hiện trong cửa sổ 
    (từ chỉ số start đến end), kéo con trỏ start đến sau ký tự trùng
    lặp đó để loại bỏ nó khỏi cửa sổ.
    Tính toán và cập nhật độ dài của chuỗi con không trùng lặp tại
    mỗi bước.

    Kết quả: Độ dài của chuỗi con dài nhất không có ký tự lặp lại là
    kết quả cuối cùng.
*/

function lengthOfLongestSubstring(s: string): number {
    // Lưu vị trí xuất hiện của mỗi ký tự
    let map = new Map<string, number>();
    // Con trỏ bắt đầu cửa sổ
    let start = 0;
    // Độ dài của chuỗi con dài nhất không lặp lại
    let maxLength = 0;

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        // Nếu ký tự này đã xuất hiện trong cửa sổ
        // map.has(char) = check key string
        // map.get(char)! = check value of key string
        if (map.has(char) && map.get(char)! >= start) {
            // Di chuyển start đến sau vị trí của ký tự trùng lặp
            start = map.get(char)! + 1;
        }

        // Cập nhật vị trí mới nhất của ký tự trong map
        map.set(char, end);

        // Tính toán và cập nhật độ dài chuỗi con không lặp lại
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

/*
    Giải thích mã nguồn:
    Map 'map': Dùng để lưu trữ vị trí xuất hiện của từng ký tự trong
    chuỗi. Cái này giúp chúng ta biết khi nào gặp phải ký tự trùng lặp
    và tìm vị trí của nó.

    start: Con trỏ bắt đầu của cửa sổ. Nó chỉ vị trí mà chuỗi con
    không chứa ký tự lặp lại bắt đầu.

    maxLength: Biến lưu trữ độ dài của chuỗi con dài nhất không chứa
    ký tự lặp lại.

    Vòng lặp: Duyệt qua từng ký tự của chuỗi với chỉ số end. Mỗi lần
    gặp ký tự mới:

    - Nếu ký tự đã xuất hiện trong cửa sổ hiện tại (map.has(char)), 
    ta sẽ di chuyển con trỏ start đến sau vị trí của ký tự trùng lặp
    để đảm bảo cửa sổ con không có ký tự lặp lại.
    - Cập nhật vị trí mới của ký tự trong map.
    - Tính toán độ dài của chuỗi con hiện tại (end - start + 1) và
    cập nhật maxLength.

    Kết quả: Sau khi duyệt hết chuỗi, maxLength sẽ chứa độ dài của
    chuỗi con dài nhất không lặp lại.
*/

/*
    Phân tích độ phức tạp thời gian:
    - Thời gian: O(n), trong đó n là độ dài của chuỗi. Mỗi ký tự trong
    chuỗi chỉ được xử lý một lần duy nhất (khi end di chuyển từ trái
    sang phải).
    - Không gian: O(min(n, m)), trong đó n là độ dài của chuỗi và m là
    số lượng ký tự khác nhau trong chuỗi. Dung lượng của map phụ thuộc
    vào số lượng ký tự trong chuỗi (mỗi ký tự sẽ được lưu trong map).
*/

/*
    Ví dụ minh họa:

    Ví dụ 1:
    Đầu vào: "abcabcbb"
    Quá trình:
    start = 0, end = 0, chuỗi con: "a", độ dài = 1
    start = 0, end = 1, chuỗi con: "ab", độ dài = 2
    start = 0, end = 2, chuỗi con: "abc", độ dài = 3
    start = 1, end = 3, chuỗi con: "bca", độ dài = 3
    start = 2, end = 4, chuỗi con: "cab", độ dài = 3
    start = 3, end = 5, chuỗi con: "abc", độ dài = 3
    start = 4, end = 6, chuỗi con: "b", độ dài = 3
    Kết quả: Độ dài chuỗi con dài nhất là 3.
    
    Ví dụ 2:
    Đầu vào: "bbbbb"
    Quá trình:
    start = 0, end = 0, chuỗi con: "b", độ dài = 1
    start = 1, end = 1, chuỗi con: "b", độ dài = 1
    Kết quả: Độ dài chuỗi con dài nhất là 1.
    
    Ví dụ 3:
    Đầu vào: "pwwkew"
    Quá trình:
    start = 0, end = 0, chuỗi con: "p", độ dài = 1
    start = 0, end = 1, chuỗi con: "pw", độ dài = 2
    start = 0, end = 2, chuỗi con: "pww", nhưng vì w lặp lại,
    di chuyển start = 2
    start = 2, end = 3, chuỗi con: "wkw", độ dài = 3
    start = 3, end = 4, chuỗi con: "kew", độ dài = 3
    Kết quả: Độ dài chuỗi con dài nhất là 3.

    Đây là một kỹ thuật rất hữu ích khi bạn phải xử lý các chuỗi 
    hoặc mảng trong các bài toán tìm kiếm, tối ưu hóa hoặc duyệt qua
    cấu trúc dữ liệu.
*/