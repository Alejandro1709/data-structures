import { SinglyLinkedList } from './singly-linked-list';

const list = new SinglyLinkedList<number>();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

list.pop();

console.log(list);

list.shift();

console.log(list);
