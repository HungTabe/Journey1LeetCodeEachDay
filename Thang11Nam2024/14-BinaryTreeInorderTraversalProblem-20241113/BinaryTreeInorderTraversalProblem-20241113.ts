/*

    Binary Tree Inorder Traversal Problem

    BinaryTreeInorderTraversalProblem-20241113

    Duyet thu tu cay nhi phan



    Require : When traversal Duyet binary tree in

    inorder TheoThuTuTrungVi, According to we will

    1 - Browse subtree at left - Duyet cay con ben trai

    2 - Check root node - Tham nut goc

    3 - Browse subtree at right



    Solution :

    We will use method traversal binary tree without

    non-recursive by using stack - This method help avoid

    recursion HoiQuy - to avoid stack overflow with

    deeper tree



    Chúng ta sẽ sử dụng phương pháp duyệt cây nhị phân

    không đệ quy bằng cách sử dụng ngăn xếp (stack).

    Phương pháp này giúp tránh việc sử dụng đệ quy,

    có thể gây ra lỗi tràn ngăn xếp (stack overflow)

    với cây có độ sâu lớn.



    How to do :

    1. Declare

    - Create result array to store result of browsing

    - Create a stack to support tree browsing

    - Set current as root node



    2. Browsing tree

    - Use loop while to traversal tree untill current

    is null and stack is empty

    - In Loop, using a loop while nested to go to the

    most left-est of at present sub tree

    - Push current in stack

    - Move current to left node of it  

    - When there is no left node, get node from top

    of stack and set it current

    - Add value of current into result

    - Move current to sub node at right of it



    3.Result : After loop result array will include value

    of binary tree inorder



*/



class TreeNode {

    val: number;

    left: TreeNode | null;

    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {

        this.val = val === undefined ? 0 : val;

        this.left = left === undefined ? null : left;

        this.right = right === undefined ? null : right;

    }

}



function inorderTraversal(root: TreeNode | null): number[] {

    const result: number[] = [];

    const stack: TreeNode[] = [];

    let current = root;

    while (current || stack.length) {

        while (current) {

            stack.push(current);

            current = current.left;

        }

        current = stack.pop()!;

        result.push(current.val);

        current = current.right;

    }

    return result;

}



// Test function

function testInorderTraversal() {

    // Test case 1: Empty tree

    let root: TreeNode | null = null;

    console.log(inorderTraversal(root)); // Expected output: []



    // Test case 2: Single node tree

    root = new TreeNode(1);

    console.log(inorderTraversal(root)); // Expected output: [1]



    // Test case 3: Complete binary tree

    root = new TreeNode(1);

    root.left = new TreeNode(2);

    root.right = new TreeNode(3);

    root.left.left = new TreeNode(4);

    root.left.right = new TreeNode(5);

    root.right.left = new TreeNode(6);

    root.right.right = new TreeNode(7);

    console.log(inorderTraversal(root)); // Expected output: [4, 2, 5, 1, 6, 3, 7]



    // Test case 4: Left-skewed tree

    root = new TreeNode(1);

    root.left = new TreeNode(2);

    root.left.left = new TreeNode(3);

    root.left.left.left = new TreeNode(4);

    console.log(inorderTraversal(root)); // Expected output: [4, 3, 2, 1]



    // Test case 5: Right-skewed tree

    root = new TreeNode(1);

    root.right = new TreeNode(2);

    root.right.right = new TreeNode(3);

    root.right.right.right = new TreeNode(4);

    console.log(inorderTraversal(root)); // Expected output: [1, 2, 3, 4]

}



// Run the test function

testInorderTraversal();