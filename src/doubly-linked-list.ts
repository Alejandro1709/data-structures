class DLLNode<T> {
  public value: T;
  public prev: DLLNode<T> | null;
  public next: DLLNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList<T> {
  public head: DLLNode<T> | null;
  public tail: DLLNode<T> | null;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  public print(): void {
    const array = this.toArray();

    console.log(array.join(' <-> '));
  }

  public toArray(): T[] {
    const result: T[] = [];

    let current = this.head;

    while (current) {
      result.push(current.value);

      current = current.next;
    }

    return result;
  }

  public push(value: T): DoublyLinkedList<T> | void {
    const node = new DLLNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      if (!this.tail) return;

      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  public pop(): DLLNode<T> | null {
    if (!this.head) return null;

    let poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      if (!poppedNode) return null;

      this.tail = poppedNode.prev;

      if (this.tail) {
        this.tail.next = null;
      }

      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }
}
