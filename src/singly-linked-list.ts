class SLLNode<T> {
  public value: T;
  public next: SLLNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  public head: SLLNode<T> | null;
  public tail: SLLNode<T> | null;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  public push(value: T): void {
    let node = new SLLNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      if (!this.tail) return;

      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }
}
