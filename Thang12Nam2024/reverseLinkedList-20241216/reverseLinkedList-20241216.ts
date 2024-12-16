/*

Bài toán Reverse Linked List yêu cầu bạn đảo ngược một danh sách liên kết đơn (singly linked list).



Mô tả bài toán

Bạn có một danh sách liên kết đơn, và nhiệm vụ của bạn là đảo ngược danh sách này,

sao cho các nút (node) của danh sách được sắp xếp theo thứ tự ngược lại so với ban đầu.


Ví dụ

Giả sử bạn có danh sách liên kết như sau:

1 -> 2 -> 3 -> 4 -> 5

Sau khi đảo ngược, danh sách sẽ trở thành:

5 -> 4 -> 3 -> 2 -> 1

*/



/*

sử dụng stack First In Last Out

- Weak in syntax - need to improve

const ReverstLinkList(list: number[]) => {

const stack = stack<number>[];

for (const i = 0 , i < list.length, i++) {

    stack.push(list[i])

}

for (const i = 0 , i < list.length, i++) {

    stack.pop(list[i])

}

}

*/



/*

Iterative method

*/



// class ListNode define

class ListNode {

    value: number;

    // prop next will be the next ListNode object
    // next: reference to the next node in the list (or null if this is the last node).
    next: ListNode | null;

    /*

    việc sử dụng hàm khởi tạo giúp mã nguồn trở nên ngắn gọn và dễ hiểu hơn.

    Instead : let node = new ListNode();node.value = 1;node.next = null;

    U can : let node = new ListNode(1, null);

    Benefit :

    - Khởi tạo giá trị ban đầu

    Hàm khởi tạo cho phép thiết lập giá trị ban đầu cho các thuộc tính của đối tượng

    ngay khi tạo ra. Bạn có thể thiết lập giá trị value và next cho mỗi nút trong danh

    sách liên kết.



    - Đảm bảo tính nhất quán

    Hàm khởi tạo đảm bảo mọi đối tượng ListNode đều được khởi tạo với các giá trị hợp lệ.

    Điều này giúp tránh các lỗi khi các thuộc tính không được khởi tạo đúng cách.



    - Dễ dàng tạo đối tượng

    Sử dụng hàm khởi tạo giúp việc tạo các đối tượng ListNode dễ dàng và ngắn gọn hơn.

    Bạn chỉ cần gọi hàm khởi tạo với các giá trị cần thiết mà không cần thiết lập từng

    thuộc tính thủ công.

    */

    constructor(value: number, next: ListNode | null = null) {

        this.value = value;

        this.next = next;

    }

}



// Cái này t đọc không hiểu gì hết nhưng

// t sẽ cố hỏi cố đọc cố tìm ví dụ để hiểu

// Lì-Liều ăn nhiều


/*
   Hàm reverseLinkedList nhận vào tham số head là đầu của danh sách liên kết
   và trả về đầu của danh sách đã được đảo ngược
*/
function reverseLinkedList(head: ListNode | null): ListNode | null {

    let prev: ListNode | null = null;

    let current: ListNode | null = head;

    let next: ListNode | null = null;


    // While current not null keep doing things in braket
    /*
       current.value while loop until it is null
    */
    // At beginning, current = head
    while (current !== null) {

        next = current.next;  // Lưu trữ nút tiếp theo

        current.next = prev;  // Đảo ngược liên kết

        /*
         when prev = current; is executed, prev will refer to the object that is 
         currently referencing at that time. 
         However, prev does not automatically refer to current.next
        */

        prev = current;       // Di chuyển prev lên một nút

        current = next;       // Di chuyển current lên một nút

    }



    head = prev;  // Cập nhật head

    return head;

}

/*
Hãy minh họa trình tự xử lý dữ liệu trong hàm reverseLinkedList với danh sách mẫu 1 -> 2 -> 3 -> 4 -> 5. Dưới đây là cách hàm hoạt động từng bước:

Bắt đầu:
Danh sách ban đầu: 1 -> 2 -> 3 -> 4 -> 5
Khởi tạo:

prev = null
current = head (node 1)
Vòng lặp đầu tiên:
Lưu tham chiếu đến node tiếp theo: next = current.next (node 2)
Đảo ngược liên kết: current.next = prev (null)
Node 1 bây giờ trỏ đến null
Tiến con trỏ:
prev = current (node 1)
current = next (node 2)
Danh sách hiện tại:

Đã đảo ngược: 1 -> null
Còn lại: 2 -> 3 -> 4 -> 5
Vòng lặp thứ hai:
Lưu tham chiếu: next = current.next (node 3)
Đảo ngược liên kết: current.next = prev (node 1)
Node 2 bây giờ trỏ đến node 1
Tiến con trỏ:
prev = current (node 2)
current = next (node 3)
Danh sách hiện tại:

Đã đảo ngược: 2 -> 1 -> null
Còn lại: 3 -> 4 -> 5
Vòng lặp thứ ba:
Lưu tham chiếu: next = current.next (node 4)
Đảo ngược liên kết: current.next = prev (node 2)
Node 3 bây giờ trỏ đến node 2
Tiến con trỏ:
prev = current (node 3)
current = next (node 4)
Danh sách hiện tại:

Đã đảo ngược: 3 -> 2 -> 1 -> null
Còn lại: 4 -> 5
Vòng lặp thứ tư:
Lưu tham chiếu: next = current.next (node 5)
Đảo ngược liên kết: current.next = prev (node 3)
Node 4 bây giờ trỏ đến node 3
Tiến con trỏ:
prev = current (node 4)
current = next (node 5)
Danh sách hiện tại:

Đã đảo ngược: 4 -> 3 -> 2 -> 1 -> null
Còn lại: 5
Vòng lặp cuối cùng:
Lưu tham chiếu: next = current.next (null)
Đảo ngược liên kết: current.next = prev (node 4)
Node 5 bây giờ trỏ đến node 4
Tiến con trỏ:
prev = current (node 5)
current = next (null)
Danh sách hiện tại:

Đã đảo ngược: 5 -> 4 -> 3 -> 2 -> 1 -> null
Kết thúc:
Khi current = null, vòng lặp dừng.
Trả về prev, là node đầu tiên của danh sách đã đảo ngược.
Danh sách kết quả: 5 -> 4 -> 3 -> 2 -> 1
*/

/*
Tại sao ở vòng lặp đầu tiên thì current.next = prev (null) tức là current.next = null rồi , vậy thì tại sao sau đó thực hiện prev = current thì prev lại tham chiếu được tới node 1 trong khi object current khi này có value là 1 và next là null
ChatGPT said:
ChatGPT
Để trả lời câu hỏi này, chúng ta cần làm rõ cách các biến prev, current, và liên kết của các node trong danh sách hoạt động trong bộ nhớ:

1. current.next = prev
Khi thực hiện lệnh này trong vòng lặp đầu tiên:

current đang trỏ đến node 1.
prev đang là null.
Sau khi thực hiện:
current.next (tức là node 1.next) được gán giá trị của prev, nên node 1.next = null.
Bây giờ, node 1 trỏ đến null, nhưng biến current vẫn tham chiếu đến toàn bộ đối tượng node 1. Giá trị của current không thay đổi, mà chỉ thuộc tính next của đối tượng này thay đổi.

2. prev = current
Sau khi cập nhật prev:

Biến prev được gán tham chiếu của current, tức là bây giờ prev trỏ đến node 1 (đối tượng trong bộ nhớ mà current đang trỏ đến).
Vì vậy:
prev.value là 1.
prev.next là null.
Điều quan trọng:
prev không tạo một bản sao của đối tượng mà chỉ trỏ đến cùng vùng nhớ mà current trỏ tới. Vậy nên, ngay cả khi current.next đã được thay đổi, prev vẫn tham chiếu đến toàn bộ đối tượng node 1.

3. current = next
Tiếp theo:

Biến current được cập nhật để trỏ tới node 2 (lưu trong biến next trước đó).
Sau khi gán:
current.value là 2.
current.next trỏ đến node 3.
Lúc này:

prev trỏ đến node 1 (với next = null).
current trỏ đến node 2 (vẫn giữ liên kết gốc đến các node còn lại).
Kết luận:
Cơ chế này hoạt động nhờ cách tham chiếu đến cùng vùng nhớ trong bộ nhớ:

Khi current.next = null, liên kết từ node 1 đến node 2 bị phá vỡ, nhưng current vẫn trỏ đến toàn bộ node 1, và sau khi gán prev = current, prev cũng trỏ đến chính đối tượng này.
Cả hai biến không tạo bản sao mà chỉ thay đổi tham chiếu của các thuộc tính bên trong đối tượng.
*/