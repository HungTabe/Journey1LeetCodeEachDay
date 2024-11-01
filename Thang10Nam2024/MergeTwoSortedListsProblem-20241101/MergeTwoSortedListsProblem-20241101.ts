class ListNode {
    val: number;
    next!: ListNode|null;
    constructor(val: number) {
        this.val = val;
        this.next = null;
    }
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0); // Create fake node
    let current = dummy; // Current pointer begin from dummy node

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1; // link node l1 into new list
            l1 = l1.next; // move l1 to next node
        } else {
            current.next = l2 // link node l2 into new list
            l2 = l2.next // move l2 to next node
        }
        current = current.next; // move current pointer
    }
    // Link the remain of l1 or l2
    current.next = l1 !== null ? l1 : l2;

    return dummy.next; // return new list
}


// Hàm để in danh sách liên kết
function printList(head: ListNode | null): void {
    let current = head;
    const values: number[] = [];
    while (current) {
        values.push(current.val);
        current = current.next;
    }
    console.log(values.join(' -> '));
}

// Hàm để tạo danh sách liên kết từ mảng
function createList(arr: number[]): ListNode | null {
    const dummy = new ListNode(0);
    let current = dummy;
    for (const num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Test chức năng
const l1 = createList([1, 2, 4]);
const l2 = createList([1, 3, 4]);
const mergedList = mergeTwoLists(l1, l2);

console.log("Merged List:");
printList(mergedList);