import { PriorityQueue } from './priority-queue';

let priorityQueue = new PriorityQueue();

priorityQueue.enqueue('common cold', 5);
priorityQueue.enqueue('gunshot wound', 1);
priorityQueue.enqueue('high fever', 4);
priorityQueue.enqueue('broken arm', 1);
priorityQueue.enqueue('glass in foot', 3);

console.log(priorityQueue.getValues());

priorityQueue.dequeue();

console.log(priorityQueue.getValues());
