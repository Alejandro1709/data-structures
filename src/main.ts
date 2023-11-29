import { SinglyLinkedList } from './singly-linked-list';

const list = new SinglyLinkedList<number>();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

let node = list.get(3);

console.log(node);

list.set(44, 3);

console.log(list);
