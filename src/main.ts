import { MaxBinaryHeap } from './max-binary-heap';

let heap = new MaxBinaryHeap();

heap.insert(55);
heap.insert(1);
heap.insert(45);

console.log(heap.getValues());
