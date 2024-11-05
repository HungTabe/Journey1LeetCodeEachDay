/*

    V2LongestSubstringWithoutRepeatingCharacters

    V2LongestSubstringWithoutRepeatingCharactersProblem-20241105

    Longest Substring Without Repeating Characters 2



    Require : Find out length of longest substring without

    any repeated char in given string




    Tool :

     - Sliding window combine with data structure Map

       to track char have seen and their index

     - Using substring call Window - move through string



    Main idea Sliding Window

    [

    Hiểu như này sẽ dùng 2 cái biến start và end và Map
      End thì để đi quét dọc theo string
      Start 
      Map là để lưu các Khóa chữ - index để check đã end 
      đã từng đi qua kí tự đó hay chưa 
      - Chưa thì lưu vào map và cập nhật maxlength
      - Có rồi thì start sẽ cập nhật



     * Khởi tạo:

    Sử dụng hai biến start và end để đánh dấu vị trí bắt đầu

    và kết thúc của cửa sổ. Ban đầu, cả hai đều được đặt ở đầu

    chuỗi.

    Sử dụng một Map để lưu trữ các ký tự đã xuất hiện trong

    cửa sổ và vị trí của chúng.



     * Duyệt qua chuỗi:

    Di chuyển biến end qua từng ký tự trong chuỗi.

    Với mỗi ký tự tại vị trí end, kiểm tra xem ký tự đó đã

    xuất hiện trong cửa sổ chưa (tức là có trong Map).

    Nếu ký tự đã xuất hiện, điều chỉnh vị trí start để đảm

    bảo không có ký tự lặp lại trong cửa sổ. Cụ thể, start sẽ

    được di chuyển đến vị trí ngay sau vị trí cuối cùng mà

    ký tự đó xuất hiện.

    Cập nhật vị trí của ký tự hiện tại trong Map.



     * Cập nhật độ dài tối đa:

    Tính toán độ dài của chuỗi con hiện tại (từ start đến end)

    và cập nhật maxLength nếu độ dài này lớn hơn giá trị hiện

    tại của maxLength.



     * Kết quả:

    Sau khi duyệt hết chuỗi, maxLength sẽ chứa độ dài của chuỗi

    con dài nhất không có ký tự lặp lại.



     - Phương pháp này hiệu quả vì mỗi ký tự chỉ được duyệt qua

    tối đa hai lần (một lần khi end di chuyển và có thể một

    lần khi start di chuyển), do đó độ phức tạp thời gian là

    O(n), với n là độ dài của chuỗi. Điều này giúp giải quyết

    bài toán một cách nhanh chóng ngay cả với các chuỗi có độ

    dài lớn.

    ]



*/



function lengthOfLongestSubstring2(s: string): number {

   // Map Data Structure can store couple value : key - value

   // Each key is unique

   // <string, number> data type of key - value. Here is

   // Key type String ; Value type Number

   const map = new Map<string, number>()

   let maxLength = 0

   let start = 0



   for (let end = 0; end < s.length; end++) {

       // check that char have exist in window or not

       // If check Object Map have

       // <string>key === <string>s.[end] or not

       if (map.has(s[end])) {

           // start check to move on 1 unit cause char have

           // seen in map

           start = Math.max(map.get(s[end])! + 1, start)

       }

       // if haven't seen in map

       map.set(s[end], end)

       // update length

       maxLength = Math.max(maxLength, end - start + 1)

   }

   return maxLength

}