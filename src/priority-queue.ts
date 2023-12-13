import PQNode from './utils/priorityNode';

// Time Complexity: O(log n)
export default class PriorityQueue {
  private values: PQNode[];

  constructor() {
    this.values = [];
  }

  public getValues(): PQNode[] {
    return this.values;
  }

  public enqueue(value: string, priority: number): void {
    let node = new PQNode(value, priority);
    this.values.push(node);
    this.bubbleUp();
  }

  public dequeue() {
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end!;
      this.sinkDown();
    }

    return min;
  }

  private bubbleUp(): void {
    let index = this.values.length - 1; // 6
    const element = this.values[index]; // 55

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element.getPriority() >= parent.getPriority()) break;

      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  private sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.getPriority() < element.getPriority()) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.getPriority() < element.getPriority()) ||
          (swap !== null && rightChild.getPriority() < leftChild!.getPriority())
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
    }
  }
}
