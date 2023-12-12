export class MaxBinaryHeap<T> {
  private values: T[];

  constructor() {
    this.values = [];
  }

  public getValues(): T[] {
    return this.values;
  }

  public insert(value: T): void {
    this.values.push(value);
    this.bubbleUp();
  }

  private bubbleUp() {
    let index = this.values.length - 1; // 6
    const element = this.values[index]; // 55

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element <= parent) break;

      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
}
