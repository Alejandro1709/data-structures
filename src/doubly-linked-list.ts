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

  public shift(): DLLNode<T> | null {
    if (!this.head) return null;

    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    this.head = oldHead.next;

    if (this.head) {
      this.head.prev = null;
    }

    oldHead.next = null;

    this.length--;
    return oldHead;
  }

  public unshift(value: T): DoublyLinkedList<T> | void {
    let node = new DLLNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  public get(index: number): DLLNode<T> | null {
    if (index < 0 || index >= this.length) return null;

    let count = 0;
    let current = this.head;

    if (index <= this.length / 2) {
      count = 0;
      current = this.head;

      while (count !== index && current) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.head;

      while (count !== index && current) {
        current = current?.prev;
        count--;
      }
    }
    return current;
  }

  public set(index: number, value: T): boolean {
    let node = this.get(index);

    if (node !== null) {
      node.value = value;
      return true;
    }

    return false;
  }

  public insert(index: number, value: T): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let newNode = new DLLNode(value);
    let beforeNode = this.get(index - 1);

    if (!beforeNode) return false;

    let afterNode = beforeNode?.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;

    if (afterNode) {
      afterNode.prev = newNode;
    }

    this.length++;
    return true;
  }
}
