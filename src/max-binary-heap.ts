export class MaxBinaryHeap {
  private values: number[];

  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  public getValues(): number[] {
    return this.values;
  }

  public insert(value: number): void {
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

// [41,39,33,18,27,12,55]
//  0  1  2  3  4  5  6
