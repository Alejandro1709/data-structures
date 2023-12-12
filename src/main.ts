import { BinarySearchTree } from './bst';

const tree = new BinarySearchTree<number>();

tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);

let bfs = tree.bfs();
let preorder = tree.preOrderTraversal();
let inorder = tree.inOrderTraversal();
let postOrder = tree.postOrderTraversal();

console.log(`Bfs: ${bfs}`);
console.log(`PreOrder: ${preorder}`);
console.log(`InOrder: ${inorder}`);
console.log(`PostOrder: ${postOrder}`);
