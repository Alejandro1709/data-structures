// Stack using Linked Lists
class SNode<T> {
  private value: T;
  private next: SNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }

  public getValue(): T {
    return this.value;
  }

  public getNext(): SNode<T> | null {
    return this.next;
  }

  public setValue(value: T): void {
    this.value = value;
  }

  public setNext(next: SNode<T> | null): void {
    this.next = next;
  }
}

// INSERTION - O(1)
// REMOVAL - O(1)
// SEARCHING - O(n)
// REMOVAL - O(n)
export class Stack<T> {
  private first: SNode<T> | null;
  private last: SNode<T> | null;
  private size: number;

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
      this.first.setNext(temp);
    }

    return ++this.size;
  }

  public pop() {
    if (!this.first) return null;

    let temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first?.setNext(this.first.getNext());
    this.size--;
    return temp.getValue();
  }
}
