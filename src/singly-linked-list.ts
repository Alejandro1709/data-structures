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

  public push(value: T): SinglyLinkedList<T> | void {
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
    return this;
  }

  public pop(): SLLNode<T> | undefined {
    if (!this.head) return undefined;

    let current = this.head;
    let prev = current;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  public shift(): SLLNode<T> | undefined {
    if (!this.head) return undefined;

    let current = this.head;

    this.head = current.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return current;
  }

  public unshift(value: T): SinglyLinkedList<T> | void {
    let node = new SLLNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  public get(index: number): SLLNode<T> | null {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while (counter !== index && current !== null) {
      current = current.next;
      counter++;
    }

    return current;
  }

  public set(value: T, index: number): boolean {
    let node = this.get(index);

    if (!node) return false;

    node.value = value;

    return true;
  }

  public insert() {}

  public remove() {}

  public reverse() {}
}
