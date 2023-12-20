import DLLNode from './utils/doublyNode';

// INSERTION = DLL O(1) VS ARR O(n)
// REMOVAL = DLL Best case O(1) Worst case O(n) VS ARR O(n)
// SEARCHING = DLL O(n) VS ARR O(n)
// ACCESSING = DLL O(n) VS ARR O(n)
export default class DoublyLinkedList<T> {
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
      result.push(current.getValue());

      current = current.getNext();
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

      this.tail.setNext(node);
      node.setPrev(this.tail);
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

      this.tail = poppedNode.getPrev();

      if (this.tail) {
        this.tail.setNext(null);
      }

      poppedNode.setPrev(null);
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

    this.head = oldHead.getNext();

    if (this.head) {
      this.head.setPrev(null);
    }

    oldHead.setNext(null);

    this.length--;
    return oldHead;
  }

  public unshift(value: T): DoublyLinkedList<T> | void {
    let node = new DLLNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.setPrev(node);
      node.setNext(this.head);
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
        current = current.getNext();
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.head;

      while (count !== index && current) {
        current = current?.getPrev();
        count--;
      }
    }
    return current;
  }

  public set(index: number, value: T): boolean {
    let node = this.get(index);

    if (node !== null) {
      node.setValue(value);
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

    let afterNode = beforeNode?.getNext();

    beforeNode.setNext(newNode);
    newNode.setPrev(beforeNode);
    newNode.setNext(afterNode);

    if (afterNode) {
      afterNode.setPrev(newNode);
    }

    this.length++;
    return true;
  }

  public remove(index: number): DLLNode<T> | null {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) this.shift();
    if (index === this.length - 1) this.pop();

    let removedNode = this.get(index);

    if (!removedNode) return null;

    let beforeNode = removedNode.getPrev();
    let afterNode = removedNode.getNext();

    if (beforeNode) beforeNode.setNext(afterNode);
    if (afterNode) afterNode.setPrev(beforeNode);

    removedNode.setNext(null);
    removedNode.setPrev(null);

    this.length--;
    return removedNode;
  }
}
