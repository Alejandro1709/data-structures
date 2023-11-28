import { SinglyLinkedList } from './singly-linked-list';

const list = new SinglyLinkedList<number>();

list.push(1);
list.push(2);
list.push(3);

console.log(list);

list.pop();

console.log(list);
