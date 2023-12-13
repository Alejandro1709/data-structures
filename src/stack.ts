// Stack using Linked Lists
import SLLNode from './utils/singlyNode';

// INSERTION - O(1)
// REMOVAL - O(1)
// SEARCHING - O(n)
// REMOVAL - O(n)
export default class Stack<T> {
  private first: SLLNode<T> | null;
  private last: SLLNode<T> | null;
  private size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  public push(value: T): number {
    let node = new SLLNode(value);

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
