import { BinarySearchTree } from './bst';

const tree = new BinarySearchTree<number>();

tree.insert(10);
tree.insert(7);
tree.insert(13);
tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(6);

if (tree.includes(3)) {
  const node = tree.find(3);
  console.log(node);
}

console.log(tree);
