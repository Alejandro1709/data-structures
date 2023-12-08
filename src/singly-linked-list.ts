class SLLNode<T> {
  public value: T;
  public next: SLLNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

// INSERTION = SLL O(1) VS ARR O(n)
// REMOVAL = SLL Best case O(1) Worst case O(n) VS ARR O(n)
// SEARCHING = SLL O(n) VS ARR O(n)
// ACCESSING = SLL O(n) VS ARR O(n)
export class SinglyLinkedList<T> {
  private head: SLLNode<T> | null;
  private tail: SLLNode<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  public print(): void {
    let arr = this.toArray();
    console.log(arr.join(' -> '));
  }

  public toArray(): T[] {
    let arr: T[] = [];
    let current = this.head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
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

  public insert(value: T, index: number): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    let newNode = new SLLNode(value);
    let prev = this.get(index - 1);

    if (!prev) return false;

    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  public remove(index: number): SLLNode<T> | undefined {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);

    if (!prevNode?.next) return undefined;

    let removed = prevNode.next;
    prevNode.next = removed.next;

    this.length--;

    return removed;
  }

  public reverse(): SinglyLinkedList<T> | void {
    let node = this.head;

    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let i = 0; i < this.length && node; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}
