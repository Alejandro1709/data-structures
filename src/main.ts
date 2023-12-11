import { BinarySearchTree } from './bst';

const tree = new BinarySearchTree<number>();

tree.insert(20);
tree.insert(12);
tree.insert(24);
tree.insert(10);
tree.insert(15);
tree.insert(21);
tree.insert(26);

let bfs = tree.bfs(); // [20, 12, 24, 10, 15, 21, 26]
let preorder = tree.preOrderTraversal(); // [20, 12, 10, 15, 24, 21, 26]

console.log(preorder);
