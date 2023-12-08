import { Queue } from './queue';
import { Stack } from './stack';

const tasks = new Stack<string>();

tasks.push('Say Hello');
tasks.push('Buy PS5');
tasks.push('Clean Room');

console.log(tasks);

const list = new Queue<string>();

list.enqueue('Alejandro');
list.enqueue('Rodolfo');

list.dequeue();

console.log(list);
