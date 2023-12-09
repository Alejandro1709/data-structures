import { BinarySearchTree } from './bst';

const tree = new BinarySearchTree<string>();

tree.insert('C');
tree.insert('B');
tree.insert('A');
tree.insert('D');

console.log(tree);
