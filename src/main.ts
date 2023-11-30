import { SinglyLinkedList } from './singly-linked-list';

const list = new SinglyLinkedList<string>();

list.push('A');
list.push('B');
list.push('C');
list.push('D');

list.print();
// A -> B -> C -> D -> NULL

list.reverse();

list.print();
