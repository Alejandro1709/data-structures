import { MaxBinaryHeap } from './max-binary-heap';

let heap = new MaxBinaryHeap<number>();

heap.insert(55);
heap.insert(1);
heap.insert(45);
heap.insert(78);

console.log(heap.getValues());
