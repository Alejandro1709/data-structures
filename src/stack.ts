// Stack using Linked Lists
class SNode<T> {
  public value: T;
  public next: SNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

// INSERTION - O(1)
// REMOVAL - O(1)
// SEARCHING - O(n)
// REMOVAL - O(n)
export class Stack<T> {
  public first: SNode<T> | null;
  public last: SNode<T> | null;
  public size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  public push(value: T): number {
    let node = new SNode(value);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      let temp = this.first;
      this.first = node;
      this.first.next = temp;
    }

    return ++this.size;
  }

  public pop() {
    if (!this.first) return null;

    let temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
