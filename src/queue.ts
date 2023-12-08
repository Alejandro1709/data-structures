class QNode<T> {
  private value: T;
  private next: QNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }

  public getValue(): T {
    return this.value;
  }

  public getNext(): QNode<T> | null {
    return this.next;
  }

  public setValue(value: T): void {
    this.value = value;
  }

  public setNext(next: QNode<T> | null): void {
    this.next = next;
  }
}

// INSERTION - O(1)
// REMOVAL - O(1)
// SEARCHING - O(n)
// ACCESS - O(n)
export class Queue<T> {
  private first: QNode<T> | null;
  private last: QNode<T> | null;
  private size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  public enqueue(value: T): number | null {
    let node = new QNode(value);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      if (!this.last) return null;

      this.last.setNext(node);
      this.last = node;
    }
    return ++this.size;
  }

  public dequeue(): T | null {
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
