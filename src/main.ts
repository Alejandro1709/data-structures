import { DoublyLinkedList } from './doubly-linked-list';

const list = new DoublyLinkedList<string>();

list.push('A');
list.push('B');
list.push('C');
list.push('D');

console.log(list);
